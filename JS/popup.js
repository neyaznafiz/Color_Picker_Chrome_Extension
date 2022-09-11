const btn = document.querySelector('.pic-color-btn')

btn.addEventListener('click', async () => {
    // console.log('clicked')

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    // console.log(tab);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: pickColor,
    })
})


const pickColor = () => {
console.log('script working');
}