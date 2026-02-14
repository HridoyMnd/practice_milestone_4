const submitBtn = document.getElementById("submit_btn");
const commentArea = document.getElementById("comment_area")
const commentContainer = document.getElementById("comment_container");
submitBtn.addEventListener("click", () => {

    const paragraph = document.createElement("p");
    paragraph.style.border = "1px solid blueviolet"
    paragraph.innerText = commentArea.value;
    commentContainer.append(paragraph);

})

