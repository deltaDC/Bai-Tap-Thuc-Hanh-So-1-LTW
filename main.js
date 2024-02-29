//validate form đăng kí
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signup__main__form')
    const usernameMessage = document.querySelector('.signup__username__error__message')
    const dobMessage = document.querySelector('.signup__dob__error__message')
    const studenIdMessage = document.querySelector('.signup__student__id__error__message')
    const classMessage = document.querySelector('.signup__class__error__message')

    console.log(usernameMessage)
    console.log(dobMessage)
    console.log(studenIdMessage)

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const username = document.getElementById('signup__username').value
        const dob = document.getElementById('signup__dob').value
        const studenId = document.getElementById('signup__student__id').value
        const classRoom = document.getElementById('signup__class').value

        // Xóa thông báo lỗi cũ nếu có
        usernameMessage.innerHTML = ''
        dobMessage.innerHTML = ''
        studenIdMessage.innerHTML = ''
        classMessage.innerHTML = ''

        if (username.trim() === '') {
            usernameMessage.innerHTML = 'Vui lòng nhập tên người dùng.<br>'
        }

        if (dob.trim() === '') {
            dobMessage.innerHTML = 'Vui lòng nhập dob.<br>'
        }

        if (studenId.trim() === '') {
            studenIdMessage.innerHTML = 'Vui lòng nhập mã sinh viên.<br>'
        }

        if (classRoom.trim() === '') {
            classMessage.innerHTML = 'Vui lòng nhập lớp.<br>'
        }

        if (username.trim() === '' || dob.trim() === '' || studenId.trim() === '') {
            return
        }

        window.location.href = 'tracnghiem.html';
    })
})