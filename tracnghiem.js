function handleSubmit() {
    const group1Inputs = document.querySelectorAll('.answer_group1')
    const group2Inputs = document.querySelectorAll('input[name^="group2_q"]')

    const selectedAnswersGroup1 = []
    const selectedAnswersGroup2 = []
    const selectedAnswersGroup3 = {}

    let point = 0


    group1Inputs.forEach(input => {
        if (input.checked) {
            selectedAnswersGroup1.push(input.value);
        }
    })

    group2Inputs.forEach(input => {
        if (input.checked) {
            selectedAnswersGroup2.push(input.value);
        }
    })

    for (let i = 1; i <= 10; i++) {
        const questionNumber = i
        const questionKey = `group3_q${questionNumber}[]`

        const selectedInputs = document.querySelectorAll(`input[name="${questionKey}"]:checked`)

        const selectedOptions = Array.from(selectedInputs).map(input => input.value)

        selectedAnswersGroup3[questionKey] = selectedOptions
    }

    console.log(selectedAnswersGroup1)
    console.log(selectedAnswersGroup2)
    console.log(selectedAnswersGroup3)

    for (let i = 0; i < selectedAnswersGroup1.length; i++) {
        if (selectedAnswersGroup1[i] === "true") {
            point += 1
        }
    }

    for (let i = 0; i < selectedAnswersGroup1.length; i++) {
        if (selectedAnswersGroup2[i] === "a") {
            point += 1
        }
    }

    for (const questionKey in selectedAnswersGroup3) {
        const selectedOptions = selectedAnswersGroup3[questionKey];
        if (selectedOptions.includes("a")) {
            point += 1;
        }
    }

    console.log(point)
    window.alert("Điểm của bạn là: " + point + " " + "(lưu ý đáp án mặc định là A)");

}
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', handleSubmit)