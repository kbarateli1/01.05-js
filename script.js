//     Homework
//     clock



//   setInterval(myTimer, 100);


//   function myTimer() {
//       const date = new Date;
//       document.getElementById("clock").innerHTML = date.toLocaleTimeString();
//   }


//      slider

//   const slideItems = document.querySelectorAll('.slider-item');
//   const prevBtn = document.querySelector('#prev-slide-btn');
//   const nextBtn = document.querySelector('#next-slide-btn');
//   const startBtn = document.querySelector('#start-slide-btn');
//   const stopBtn = document.querySelector('#stop-slide-btn');
//   const balls = document.querySelectorAll('.ball');
//   let myInterval=null;
//   let activeIndex = 0;

//    initSlider();
//    function initSlider(){
//      prevBtn.addEventListener('click', showPrevSlide);
//      nextBtn.addEventListener('click', showNextSlide);

//      startBtn.addEventListener('click', startAutoSliding);
//      stopBtn.addEventListener('click', stopAutoSliding);

//      balls.forEach((ball, ballIndex) => {
//        ball.addEventListener('click', () => {
//          handleBallClick(ballIndex);
//        });
//      });

//     document.addEventListener('keyup', e => {
//        if(e.code === 'ArrowRight'){
//          showNextSlide();
//        }
//        if(e.code === 'ArrowLeft'){
//          showPrevSlide();
//        }
//      })
//    }

//    function startAutoSliding(){
//      myInterval = setInterval(showNextSlide, 3000);
//    }

//    function stopAutoSliding(){
//      clearInterval(myInterval)
//      myInterval=null;
//    }

//    function renderSliders() {
//      slideItems.forEach((item, i) => {
//        if(activeIndex === i){
//          item.classList.add('active');
//        } else {
//          item.classList.remove('active');
//        }
//      })
//    }

//    function showPrevSlide(){
//      activeIndex = activeIndex - 1;
//      if(activeIndex < 0){
//        activeIndex = slideItems.length - 1;
//      }
//      renderSliders();
//    }

//    function showNextSlide() {
//      activeIndex = activeIndex + 1;
//      if(activeIndex > slideItems.length - 1){
//        activeIndex = 0;
//      }
//      renderSliders();
//    }

//    function handleBallClick(nextIndex){
//      activeIndex = nextIndex;
//      renderSliders();
//    }

//     Angry professor
//    const students = [-1, -3, 4, 2];
//    function angryProfessor(k, students){
//      let positiveStudents = 0;
//      students.forEach(s => {
//        if(s < 1){
//          positiveStudents++;
//        }
//      });
//      return k > positiveStudents ? 'YES' : 'NO';
//    }
//    console.log(angryProfessor(3, students));


//    const students = [-1, -3, 4, 2];
//     function angryProfessor(k, students){
//          let count = 0;
    
//          for (let i = 0; i < students.length; i++) {
//            const student = students[i];
//            if (student<1) {
//              count++
//            }
//          }
//           if(count < k){
//             return "YES"
//           } else {
//             return "No"
//           }
//        }
    
//        console.log(angryProfessor(-1, students))


















    //    lecture 19
    // const form = document.querySelector('#user-login-form');
    // const emailInput = document.querySelector('input[name="email"]');
    // const passwordInput = document.querySelector('input[name="password"]');

    // form.addEventListener('submit', e => {
    //            e.preventDefault();
    //            console.log(emailInput.value);
    //            console.log(validateEmail());
    //            console.log(validatePassword);

    //            try {
    //             console.log(emailInput.value);
    //           } catch (e) {
    //             console.log('catch error', e);
    //           }


    //            if (validateEmail() && validatePassword()){
    //                console.log('Call to backend api');
                   
    //            }
    //     });


                


             
   
    //         function validateEmail(){
    //                    if(!emailInput.value){
    //                      emailInput.classList.add('has-error');
    //                      emailInput.parentNode.querySelector('.error-message').innerText = 'Please enter email';
    //                      return false;
    //                    }
    //                    if(!emailInput.value.includes('@') || !emailInput.value.includes('.')){
    //                      emailInput.classList.add('has-error');
    //                      emailInput.parentNode.querySelector('.error-message').innerText = 'Invalid email';
    //                      return false;
    //                    }
    //                    emailInput.classList.remove('has-error');
    //                    emailInput.parentNode.querySelector('.error-message').innerText = '';
    //                    return true;
    //                  }
                
    //                  function validatePassword(){
    //                    if(!passwordInput.value){
    //                      passwordInput.classList.add('has-error');
    //                      passwordInput.parentNode.querySelector('.error-message').innerText = 'Please enter password';
    //                     return false;
    //                   }
    //                   if(passwordInput.value.length < 8){
    //                     passwordInput.classList.add('has-error');
    //                     passwordInput.parentNode.querySelector('.error-message').innerText = 'Password must include 8 char';
    //                     return false;
    //                   }
    //                   passwordInput.classList.remove('has-error');
    //                   passwordInput.parentNode.querySelector('.error-message').innerText = '';
    //                   return true;
    //                 }



//     modals
     setTimeout(() => {
       openModal('.my-modal-2');
     }, 5000)

    const modalOpenBtn = document.querySelector('#open-modal');
    modalOpenBtn.addEventListener('click', () => {
      openModal('.my-modal');
    })

    function openModal(modalSelector){
      const modalNode = document.querySelector(modalSelector);
      modalNode.classList.add('visible');
      const modalCloseBtn = modalNode.querySelector('.modal-close');
      modalCloseBtn.addEventListener('click', () => {
        closeModal(modalSelector)
    })
   }

    function closeModal(modalSelector){
      const modalNode = document.querySelector(modalSelector);
      modalNode.classList.remove('visible');
    }