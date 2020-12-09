# Promise & async

async function is a function that always return a promise value & the code is more simple than use sync function with promise on it

the reason why its so simple is because async function doesn't need .then method and response to call the promise value (if the condition is function requirement is meet)

# Example

### Sync function that use promise

function logFetch(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      console.log(text);
    }).catch(err => {
      console.error('fetch failed', err);
    });
}

### async function

async function logFetch(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}