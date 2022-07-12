 // header - mobile - responsive
            // active
            // $(".menu-toggle").click(function () {
            //     $(".modal-menu-mobile").addClass("active")
            // })
            // close
            // $(".btn-close").click(function () {
            //     $(".modal-menu-mobile").removeClass("active")
            //     $(".list-menu-mobile li a").next(".sub-menu").slideUp();
            //     $(".list-menu-mobile li a").children("i").removeClass("open")
            // })


            // $(".list-menu-mobile li a").click(function (event) {
            //     event.preventDefault();
            //     $(this).next(".sub-menu").slideToggle();
            //     $(this).children("i").toggleClass("open")
            // })

            //b1: menu toggle click cho  modal menu moblie active
            //b2: ( close ) click btn-close làm cho modal-menu-moblie remove class active
            //b3: làm animation ( slide up)  cho sự kiện click vào các nút A trong ul > li > a 
            
window.addEventListener("load",function(){
    const temple = `<div class="modal-menu-mobile">
        <div class="menu-mobile-content">

            <div class="nemu-mobile-close">
                <button class="btn-close"><i class="fas fa-times"></i></button>
            </div>
            <div style="max-height: 667px;" class="wp-list-menu-mobile">
                <ul class="list-menu-mobile">
                    <li><a href="">Giới thiệu <i class="fas fa-chevron-right"></i></a>
                        <ul class="sub-menu list-unstyled">
                            <li><a href="">Giới thiệu</a></li>
                            <li><a href="">Đảng ủy</a></li>
                            <li><a href="">Hội đồng Trường</a></li>
                            <li><a href="">Ban giám hiệu</a></li>
                            <li><a href="">Hội đồng tư vấn</a></li>
                        </ul>
                    </li>
                    <li><a href="">Quảng trị <i class="fas fa-chevron-right"></i></a>
                        <ul class="sub-menu list-unstyled">
                            <li><a href="">Kế hoạch chiến lược</a></li>
                            <li><a href="">Quy trình - Biểu mẫu</a></li>
                            <li><a href="">Sơ đồ tổ chức</a></li>
                        </ul>
                    </li>
                    <li><a href="">Đào tạo <i class="fas fa-chevron-right"></i></a>
                        <ul class="sub-menu list-unstyled">
                            <li><a href="">Lịch thi</a></li>
                            <li><a href="">Chuẩn đầu ra</a></li>
                            <li><a href="">Chương trình đào tạo</a></li>
                            <li><a href="">Quy chế - Biểu mẫu</a></li>
                            <li><a href="">Phòng đào tạo</a></li>
                        </ul>
                    </li>
                    <li><a href="">Tuyển sinh</a></li>
                    <li><a href="">Đảm bảo chất lượng <i class="fas fa-chevron-right"></i></a>
                        <ul class="sub-menu list-unstyled">
                            <li><a href="">Hệ thống DBCL</a></li>
                            <li><a href="">Tự đánh giá</a></li>
                            <li><a href="">Quy trình- Biểu mẫu</a></li>
                            <li><a href="">Ba ccông khai</a></li>
                        </ul>
                    </li>
                    <li><a href=""> NCKH - HTDT <i class="fas fa-chevron-right"></i></a>
                        <ul class="sub-menu list-unstyled">
                            <li><a href="">Thông báo</a></li>
                            <li><a href="">Nghiên cứu khoa học</a></li>
                            <li><a href="">Hoạt động hợp tác</a></li>
                        </ul>
                    </li>
                    <li><a href=""> Sinh viên <i class="fas fa-chevron-right"></i></a>
                        <ul class="sub-menu list-unstyled">
                            <li><a href="">Phong trào sinh viên</a></li>
                            <li><a href="">Hỗ trợ sinh viên</a></li>
                            <li><a href="">Cựu sinh viên</a></li>
                        </ul>
                    </li>
                    <li><a href="">Các đơn vị <i class="fas fa-chevron-right"></i></a>
                        <ul class="sub-menu list-unstyled">
                            <li><a href="">Khoa - Bộ môn</a></li>
                            <li><a href="">Phòng/Tổ chức năng</a></li>
                            <li><a href="">Trung tâm</a></li>
                            <li><a href="">Đoàn thể</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend",temple);

    const btnMenuToggle = document.querySelector(".menu-toggle");
    const modalMenu = document.querySelector(".modal-menu-mobile");
    const btnCloseMenu = document.querySelector(".btn-close");
    const icon = document.querySelectorAll(".list-menu-mobile > li > a > i")
    
    function toggleMenu(){
        modalMenu.classList.toggle("active");
    }
    btnMenuToggle.addEventListener("click",toggleMenu);

    const menuItem = document.querySelectorAll(".list-menu-mobile > li > a");
    menuItem.forEach((item) => {
        item.addEventListener("click",function(e){
            e.preventDefault();
            const activeStr = "is-active";
            const subMenu = e.target.nextElementSibling;
            subMenu.style.height = `${subMenu.scrollHeight}px`;
            
            if(subMenu.classList.contains("is-active")){
                subMenu.style.height = `0px`;
            }
            
            subMenu.classList.toggle(activeStr);

            const icon =  e.target.firstElementChild;
            icon.classList.toggle("open")
        });
    })

    btnCloseMenu.addEventListener("click",function(){
        toggleMenu();
        const subMenu = document.querySelectorAll(".sub-menu");
        const icon = document.querySelectorAll(".list-menu-mobile > li > a > i")
        console.log(icon)
        subMenu.forEach((item) => {
            item.style.height = `0px`;
        })
        icon.forEach((item) => {
            item.classList.remove("open");
        })
    })
   
    
});