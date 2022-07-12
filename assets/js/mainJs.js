window.addEventListener("load", function () {

    /* get date header */
    function getDate() {
        var date = new Date();

        var year = date.getFullYear();
        var months = `0${date.getMonth() + 1}`;
        var day = `0${date.getDate()}`;
        var currentDay = date.getDay();

        var dayName = '';
        switch (currentDay) {
            case 0: dayName = "Chủ Nhật"; break;
            case 1: dayName = "Thứ Hai"; break;
            case 2: dayName = "Thứ Ba"; break;
            case 3: dayName = "Thứ Tư"; break;
            case 4: dayName = "Thứ Năm"; break;
            case 5: dayName = "Thứ Sáu"; break;
            case 6: dayName = "Thứ Bảy"; break;
        }

        var today = document.getElementById("date")
        today.innerHTML = `${dayName}, ${day.slice(-2)}/${months.slice(-2)}/${year}`
    }
    getDate();


    /* get in input search */
    const btnSearch = document.querySelector(".btn-search")
    const inputSearch = document.querySelector(".gruop-search input")
    btnSearch.addEventListener("click", function (e) {
        e.preventDefault();
        inputSearch.classList.add("active")
    })
    window.addEventListener("resize", function () {
        inputSearch.classList.remove("active")
    });
    /* get out input search */
    document.addEventListener("click", handleClickOutInput)
    function handleClickOutInput(e) {
        // console.log(document.querySelector(".fa-search").contains(e.target))
        if (!document.querySelector(".fa-search").contains(e.target) && !e.target.matches("fa-search")) {
            document.querySelector(".e").classList.remove("active");
        }
    }



    const headerBottom = document.querySelector("#header-bottom");
    const backPage = document.querySelector(".back-page")
    window.addEventListener("scroll", handleScrollButton)
    function handleScrollButton() {
        if (window.pageYOffset >= 800) {
            headerBottom.classList.add("open")
            backPage.classList.add("open")
        } else {
            headerBottom.classList.remove("open")
            backPage.classList.remove("open")
        }
    }
    backPage.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })


    firstChildSocialButton = document.querySelector(".social-button a:nth-child(1)")
    firstChildSocialButton.addEventListener("mouseenter", function (e) {
        document.querySelector(".contract-phone").classList.add("animeted")
    });
    firstChildSocialButton.addEventListener("mouseleave", function (e) {
        document.querySelector(".contract-phone").classList.remove("animeted")
    });

    secondChildSocialButton = document.querySelector(".social-button a:nth-child(2)")
    secondChildSocialButton.addEventListener("mouseenter", function (e) {
        document.querySelector(".contract-email").classList.add("animeted")
    });
    secondChildSocialButton.addEventListener("mouseleave", function (e) {
        document.querySelector(".contract-email").classList.remove("animeted")
    });
});