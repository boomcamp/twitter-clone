const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const {
  getByTestId,
  getByText,
  fireEvent,
  waitForElement,
  waitForDomChange,
} = require('dom-testing-library');

async function getWindow(filePath, options) {
  const { window } = await JSDOM.fromFile(filePath, options);
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
  const container = window.document;
  return window;
}

let container;

beforeAll(() => {
  return new Promise((resolve, reject) => {
    JSDOM.fromFile(path.join(__dirname, '../index.html'), {
      runScripts: 'dangerously',
      resources: 'usable',
    }).then(dom => {
      const { window } = dom;
      setTimeout(() => {
        global.window = window;
        global.document = window.document;
        global.navigator = window.navigator;
        container = window.document;
        resolve();
      }, 2000);
    });
  });
});

describe('twitter clone', () => {
  describe('initial state', () => {
    it('has one tweet', () => {
      const tweets = getByTestId(container, 'tweets');
      expect(tweets.children.length).toBe(1);
    });

    it('input button should be visible', () => {
      const inputButton = getByTestId(container, 'input-button');
      expect(inputButton.style.display).toBeFalsy();
    });

    it('tweet actions should be hidden', () => {
      const tweetActions = getByTestId(container, 'tweet-actions');
      expect(tweetActions.style.display).toBe('none');
    });
  });

  describe('input focus', () => {
    beforeAll(() => {
      fireEvent.focus(getByTestId(container, 'tweet-input'));
    });

    it('should hide input button', () => {
      expect(getByTestId(container, 'input-button').style.display).toBe('none');
    });

    it('should show tweet actions', () => {
      expect(getByTestId(container, 'tweet-actions').style.display).toBeFalsy();
    });

    it('textarea should be expanded', () => {
      const textarea = getByTestId(container, 'tweet-input');
      expect(textarea.classList.contains('expanded')).toBeTruthy();
    });

    it('tweet button should be disabled', () => {
      expect(getByTestId(container, 'post-tweet').disabled).toBeTruthy();
    });
  });

  describe('input focus with tweet content', () => {
    const tweetContent = 'tweet stuff';

    beforeAll(() => {
      fireEvent.input(getByTestId(container, 'tweet-input'), {
        target: { value: tweetContent },
      });
    });

    it('should input content in textarea', () => {
      expect(getByTestId(container, 'tweet-input').value).toEqual(tweetContent);
    });

    it('should enable button when there is tweet content', () => {
      expect(getByTestId(container, 'post-tweet').disabled).toBeFalsy();
    });

    it('should decrement message counter based on tweet length', () => {
      expect(getByTestId(container, 'message-count').textContent).toEqual(
        (280 - tweetContent.length).toString()
      );
    });
  });

  describe('input blur with content should not hide action buttons', () => {
    beforeAll(() => {
      fireEvent.blur(getByTestId(container, 'tweet-input'));
    });

    it('should not hide action buttons', () => {
      expect(getByTestId(container, 'tweet-actions').style.display).toBeFalsy();
    });
  });

  describe('input blur without content collapses tweet actions', () => {
    beforeAll(() => {
      const tweetInput = getByTestId(container, 'tweet-input');
      fireEvent.input(tweetInput, { target: { value: '' } });
      fireEvent.blur(tweetInput);
    });

    it('should hide tweet actions', () => {
      expect(getByTestId(container, 'tweet-actions').style.display).toBe(
        'none'
      );
    });

    it('should collapse input', () => {
      expect(
        getByTestId(container, 'tweet-input').classList.contains('expanded')
      ).toBeFalsy();
    });
  });

  describe('post tweet', () => {
    beforeAll(() => {
      const tweetContent = 'tweet stuff';
      const tweetInput = getByTestId(container, 'tweet-input');
      fireEvent.focus(tweetInput);
      fireEvent.input(tweetInput, { target: { value: tweetContent } });

      fireEvent.click(getByTestId(container, 'post-tweet'));
    });

    it('should add tweet to timeline', () => {
      const tweets = getByTestId(container, 'tweets');

      expect(tweets.children.length).toBe(2);

      const newTweet = tweets.children[0];

      expect(getByText(newTweet, /tweet stuff/i)).toBeDefined();
    });
  });

  it('should go back to initial state after post', () => {
      expect(getByTestId(container, 'input-button').style.display).toBeFalsy();
      expect(getByTestId(container, 'tweet-actions').style.display).toBe('none');
  })
});





