const Button = (btn, message, count) => {
    let num_count = 0;
    const messages = {
        1: "Keep clicking...",
        2: "... getting there...",
        3: "... just a couple more ...",
        4: "... almost...",
        5: "5 clicks! You're a Pro!!!",
    }

    btn.addEventListener("click", () => {
        num_count += 1

        if (num_count == 5) {
            message.innerText = "5 Clicks! You did it! Care to try again? Click on...";
            count.innerText = num_count;
        } else if (num_count > 5) {
            num_count = 0;
            btn.click()
        } else {
            count.innerText = num_count;
            message.innerText = messages[num_count];
        } 
    })
} 

export default Button;