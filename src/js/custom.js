
export let sel = (selector, all = false, r = document) => {
  return all
    ? r.querySelectorAll(selector)
    : r.querySelector(selector);
}