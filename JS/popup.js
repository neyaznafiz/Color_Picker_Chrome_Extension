const btn = document.querySelector('.pic-color-btn')
const colorGrid = document.querySelector('.colorGrid')
const colorValue = document.querySelector('.colorValue')

btn.addEventListener('click', async () => {
    // console.log('clicked')

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    // console.log(tab);

    // chrome tab access
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: pickColor,
    }, async (injectionResults) => {
        const [data] = injectionResults
        if (data.result) {
            const color = data.result.sRGBHex
            colorGrid.style.backgroundColor = color
            colorValue.innerText = color + ' ' + 'Copied!'


            try {
                await navigator.clipboard.writeText(color)
            } catch (error) {
                console.error(error)
            }
        }
    })
})



// picker
const pickColor = async () => {
    // console.log('script working');
    try {

        const eyeDropper = new EyeDropper()
        return await eyeDropper.open()
        console.log(selectedColor);

    } catch (error) {
        console.error(error)
    }
}