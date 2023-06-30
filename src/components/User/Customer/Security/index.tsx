import React from "react";
import Sidebar from "../../../Common/Sidebar";
import { useTranslation } from "react-i18next";

const Security = React.memo(() => {
   const { t } = useTranslation();

   return (
      <div className="div-contai flex">
         <div className="w-1/4">
            <Sidebar />
         </div>
         <div className="w-3/4 bg-white rounded p-5 text-justify">
            <div className="uppercase text-2xl font-bold text-center">
               {t("user.security.title")}
            </div>
            <div className="flex flex-col mt-5">
               {t("user.security.updating_content")}
               {/* <div className="wrapper-question mona-content">
                  <div
                     className="mailmunch-forms-before-post"
                     style={{ display: "none !important" }}
                  />
                  <div className="item-col">
                     <p>
                        <b>
                           <strong>1. GIỚI THIỆU</strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        1.1. Chào mừng bạn đến với website yay.toys được vận
                        hành bởi Công ty TNHH Đồ chơi Yay và các công ty liên
                        kết (gọi riêng và gọi chung là, “Yay”, “chúng tôi”, hay
                        “của chúng tôi”). Yay nghiêm túc thực hiện trách nhiệm
                        của mình liên quan đến bảo mật thông tin theo các quy
                        định về bảo vệ bí mật thông tin cá nhân của pháp luật
                        Việt Nam (“Luật riêng tư”) và cam kết tôn trọng quyền
                        riêng tư và sự quan tâm của tất cả người dùng đối với
                        website và ứng dụng di động của chúng tôi (“Nền tảng”)
                        (chúng tôi gọi chung Các Nền tảng và các dịch vụ chúng
                        tôi cung cấp như được mô tả trong Nền tảng của chúng tôi
                        là “các Dịch Vụ”). Người dùng có nghĩa là người đăng ký
                        tài khoản với chúng tôi để sử dụng các Dịch Vụ, bao gồm
                        cả người mua và người bán (gọi chung và gọi riêng là
                        “Các Người Dùng”, “bạn” hoặc “của bạn”). Chúng tôi nhận
                        biết tầm quan trọng của dữ liệu cá nhân mà bạn đã tin
                        tưởng giao cho chúng tôi và tin rằng chúng tôi có trách
                        nhiệm quản lý, bảo vệ và xử lý dữ liệu cá nhân của bạn
                        một cách thích hợp. Chính sách bảo mật này (“Chính sách
                        bảo mật” hay “Chính sách”) được thiết kế để giúp bạn
                        hiểu được cách thức chúng tôi thu thập, sử dụng, tiết lộ
                        và/hoặc xử lý dữ liệu cá nhân mà bạn đã cung cấp cho
                        chúng tôi và/hoặc lưu giữ về bạn, cho dù là hiện nay
                        hoặc trong tương lai, cũng như để giúp bạn đưa ra quyết
                        định sáng suốt trước khi cung cấp cho chúng tôi bất kỳ
                        dữ liệu cá nhân nào của bạn.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        1.2. “Dữ Liệu Cá Nhân” hay “dữ liệu cá nhân” có nghĩa là
                        dữ liệu, dù đúng hay không, về một cá nhân mà thông qua
                        đó có thể được xác định được danh tính, hoặc từ dữ liệu
                        đó và thông tin khác mà một tổ chức có hoặc có khả năng
                        tiếp cận. Các ví dụ thường gặp về dữ liệu cá nhân có thể
                        gồm có tên, số chứng minh nhân dân và thông tin liên hệ.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        1.3. Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài
                        khoản với chúng tôi hoặc truy cập Nền tảng, bạn xác nhận
                        và đồng ý rằng bạn chấp nhận các phương pháp, yêu cầu,
                        và/hoặc chính sách được mô tả trong Chính sách bảo mật
                        này, và theo đây bạn đồng ý cho phép chúng tôi thu thập,
                        sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn
                        như mô tả trong đây. NẾU BẠN KHÔNG ĐỒNG Ý CHO PHÉP XỬ LÝ
                        DỮ LIỆU CÁ NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG CHÍNH SÁCH NÀY,
                        VUI LÒNG KHÔNG SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HAY
                        TRUY CẬP NỀN TẢNG HOẶC TRANG WEB CỦA CHÚNG TÔI. Nếu
                        chúng tôi thay đổi Chính sách bảo mật của mình, chúng
                        tôi sẽ thông báo cho bạn bao gồm cả thông qua việc đăng
                        tải những thay đổi đó hoặc Chính sách bảo mật sửa đổi
                        trên Nền tảng của chúng tôi. Trong phạm vi pháp luật cho
                        phép, việc tiếp tục sử dụng các Dịch Vụ hoặc Nền Tảng,
                        bao gồm giao dịch của bạn, được xem là bạn đã công nhận
                        và đồng ý với các thay đổi trong Chính Sách Bảo Mật này.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        1.4. Chính sách này áp dụng cùng với các thông báo, điều
                        khoản hợp đồng, điều khoản chấp thuận khác áp dụng liên
                        quan đến việc chúng tôi thu thập, lưu trữ, sử dụng, tiết
                        lộ và/hoặc xử lý dữ liệu cá nhân của bạn và không nhằm
                        ghi đè những thông báo hoặc các điều khoản đó trừ khi
                        chúng tôi có tuyên bố ràng khác.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        1.5. Chính sách này được áp dụng cho cả Người bán và
                        Người mua đang sử dụng Dịch vụ trừ khi có tuyên bố rõ
                        ràng ngược lại.
                     </p>
                     <p>
                        <b />
                        <b>
                           <strong>
                              2. KHI NÀO YAY SẼ THU THẬP DỮ LIỆU CÁ NHÂN?
                           </strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        2.1. Chúng tôi sẽ/có thể thu thập dữ liệu cá nhân về
                        bạn:
                     </p>
                     <ul className="list-disc ms-10">
                        <li style={{ fontWeight: 400 }}>
                           khi bạn đăng ký và/hoặc sử dụng Các Dịch Vụ hoặc Nền
                           tảng của chúng tôi, hoặc mở một tài khoản với chúng
                           tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn gửi bất kỳ biểu mẫu nào, bao gồm đơn đăng ký
                           hoặc các mẫu đơn khác liên quan đến bất kỳ sản phẩm
                           và dịch vụ nào của chúng tôi, bằng hình thức trực
                           tuyến hay dưới hình thức khác;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp
                           các tài liệu hoặc thông tin khác liên quan đến tương
                           tác giữa bạn với chúng tôi, hoặc khi bạn sử dụng các
                           sản phẩm và dịch vụ của chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn tương tác với chúng tôi, chẳng hạn như thông
                           qua các cuộc gọi điện thoại (có thể được ghi âm lại),
                           thư từ, fax, gặp gỡ trực tiếp, các nền ứng dụng
                           truyền thông xã hội và email;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn sử dụng các dịch vụ điện tử của chúng tôi,
                           hoặc tương tác với chúng tôi qua Nền tảng hoặc Trang
                           Web hoặc Các Dịch Vụ của chúng tôi. Trường hợp này
                           bao gồm thông qua tập tin cookie mà chúng tôi có thể
                           triển khai khi bạn tương tác với các Nền tảng hoặc
                           Trang Web của chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn cấp quyền trên thiết bị của bạn để chia sẻ
                           thông tin với Nền tảng của chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           Khi bạn liên kết tài khoản Yay với tài khoản mạng xã
                           hội của bạn hoặc các tài khoản bên ngoài khác hoặc sử
                           dụng các tính năng mạng xã hội khác, phù hợp với các
                           chính sách của nhà cung cấp;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn thực hiện các giao dịch thông qua Dịch vụ của
                           chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn cung cấp ý kiến phản hồi hoặc gửi khiếu nại
                           cho chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn đăng ký tham gia một cuộc thi; hoặc
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           khi bạn gửi dữ liệu cá nhân của bạn cho chúng tôi vì
                           bất kỳ lý do gì.
                        </li>
                     </ul>
                     <p style={{ fontWeight: 400 }}>
                        Các trường hợp trên không nhằm mục đích liệt kê đầy đủ
                        các trường hợp và chỉ đưa ra một số trường hợp phổ biến
                        về thời điểm dữ liệu cá nhân của bạn có thể bị thu thập
                     </p>
                     <p>
                        <b>
                           <strong>3. YAY SẼ THU THẬP NHỮNG DỮ LIỆU GÌ?</strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        3.1. Dữ liệu cá nhân mà Yay có thể thu thập bao gồm:
                     </p>
                     <ul className="list-disc ms-10">
                        <li style={{ fontWeight: 400 }}>họ tên;</li>
                        <li style={{ fontWeight: 400 }}>địa chỉ email;</li>
                        <li style={{ fontWeight: 400 }}>ngày sinh;</li>
                        <li style={{ fontWeight: 400 }}>
                           địa chỉ thanh toán và/hoặc giao nhận hàng hóa;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           tài khoản ngân hàng và thông tin thanh toán;
                        </li>
                        <li style={{ fontWeight: 400 }}>số điện thoại;</li>
                        <li style={{ fontWeight: 400 }}>giới tính;</li>
                        <li style={{ fontWeight: 400 }}>
                           thông tin được gửi bởi hoặc liên quan đến (các) thiết
                           bị được sử dụng để truy cập vào Các Dịch vụ hoặc Nền
                           tảng của chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           thông tin về mạng của bạn và những người và tài khoản
                           mà bạn có tương tác;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           hình ảnh hoặc âm thanh hoặc video;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           Thông tin về nhân thân được cấp bởi chính phủ hoặc
                           các thông tin khác phục vụ cho các mục đích đánh giá
                           pháp lý, nhận biết khách hàng, xác minh thông tin
                           hoặc phòng chống gian lận của chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           dữ liệu truyền thông hoặc liên lạc, ví dụ như các tùy
                           chọn nhận thông tin quảng cáo từ chúng tôi hoặc các
                           bên thứ ba của bạn, tùy chọn phương tiện liên lạc và
                           lịch sử thông tin liên lạc với chúng tôi, các nhà
                           cung cấp dịch vụ của chúng tôi, và các bên thứ ba
                           khác;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           thông tin sử dụng và giao dịch, bao gồm chi tiết về
                           lịch sử tìm kiếm, giao dịch, quảng cáo và nội dung
                           hiển thị mà tương tác với Nền Tảng, cũng như các sản
                           phẩm và dịch vụ có liên quan của bạn;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           dữ liệu về địa điểm;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           bất kỳ thông tin nào khác về người dùng khi người
                           dùng đăng nhập để sử dụng Các Dịch Vụ hoặc Nền tảng
                           của chúng tôi, và khi người dùng sử dụng Các Dịch Vụ
                           hoặc Nền tảng, cũng như thông tin về việc người dùng
                           sử dụng Các Dịch Vụ hoặc Nền tảng của chúng tôi như
                           thế nào; và
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           dữ liệu tổng hợp về nội dung người dùng sử dụng.
                        </li>
                     </ul>
                     <p style={{ fontWeight: 400 }}>
                        3.2. Bạn đồng ý không cung cấp cho chúng tôi bất cứ
                        thông tin nào không chính xác hoặc gây hiểu nhầm và bạn
                        đồng ý sẽ thông báo cho chúng tôi về bất cứ thông tin
                        nào không chính xác hoặc khi có sự thay đổi thông tin.
                        Chúng tôi bảo lưu quyền theo quyết định riêng của chúng
                        tôi được yêu cầu các tài liệu cần thiết khác để xác minh
                        thông tin được bạn cung cấp.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        3.3. Nếu bạn đăng nhập để trở thành Người sử dụng các
                        Nền tảng của chúng tôi sử dụng tài khoản mạng xã hội của
                        Bạn (“Tài khoản Mạng Xã hội”), liên kết tài khoản của
                        bạn với Tài khoản Mạng Xã hội của bạn, chúng tôi có
                        quyền truy cập thông tin về bạn mà bạn đã cung cấp một
                        cách tự nguyện cho nhà cung cấp dịch vụ Tài khoản Mạng
                        Xã hội của Bạn tuân theo các chính sách của các nhà cung
                        cấp dịch vụ này, và chúng tôi sẽ quản lý và sử dụng các
                        dữ liệu cá nhân này của bạn theo các quy định của Chính
                        sách này tại mọi thời điểm.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        3.4. Nếu bạn không muốn chúng tôi thu thập thông tin/dữ
                        liệu cá nhân nói trên, bạn có thể chọn không tham gia
                        vào bất kỳ lúc nào bằng cách thông báo bằng văn bản đến
                        Nhân Viên Bảo Vệ Dữ Liệu của chúng tôi. Có thể tìm thấy
                        thêm thông tin về nội dung trong mục{" "}
                        <em>
                           “Bạn có thể rút lại sự cho phép xóa tên, yêu cầu truy
                           cập hoặc điều chỉnh thông tin bạn đã cung cấp cho
                           chúng tôi bằng cách nào?”
                        </em>{" "}
                        dưới đây. Tuy nhiên, lưu ý rằng việc từ chối hoặc hủy bỏ
                        cho phép chúng tôi thu thập, sử dụng hoặc xử lý dữ liệu
                        cá nhân của bạn có thể ảnh hưởng đến việc bạn sử dụng
                        Các Dịch Vụ và Nền tảng. Ví dụ như dịch vụ xác định vị
                        trí sẽ không hoạt động nếu bạn không cho phép ứng dụng
                        truy cập vị trí của bạn.
                     </p>
                     <p>
                        <b>
                           <strong>4. THU THẬP CÁC DỮ LIỆU KHÁC</strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        4.1 Như với hầu hết các trang web khác, thiết bị của bạn
                        gửi thông tin có thể gồm có dữ liệu về bạn, được một máy
                        chủ web ghi lại khi bạn sử dụng Nền tảng của chúng tôi.
                        Thông tin này thông thường bao gồm nhưng không giới hạn
                        địa chỉ IP, hệ điều hành của máy tính/thiết bị di động,
                        loại trình duyệt, loại thiết bị di động, các đặc điểm
                        của thiết bị di động, mã định danh thiết bị thống nhất
                        (UDID) hoặc mã định danh thiết bị di động (MEID) của
                        thiết bị di động của bạn, địa chỉ tham chiếu của Trang
                        Web (nếu có), các trang mà bạn đã truy cập đến trên
                        trang web hoặc ứng dụng di động của chúng tôi và thời
                        gian truy cập và đôi khi là “cookie” (có thể vô hiệu hóa
                        bằng cách sử dụng tùy chọn trình duyệt của bạn) để giúp
                        trang web ghi nhớ lần truy cập cuối cùng của bạn. Nếu
                        bạn đăng nhập, thông tin này được liên kết với tài khoản
                        cá nhân của bạn. Thông tin này cũng được đưa vào các số
                        liệu thống kê ẩn danh để giúp chúng tôi hiểu được khách
                        truy cập sử dụng Trang Web của chúng tôi như thế nào.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        4.2. K khi bạn xem các trang trên trang web của chúng
                        tôi, khi bạn xem các nội dung và quảng cáo và truy cập
                        vào phần mềm khác trên Nền tảng của chúng tôi hoặc thông
                        qua Dịch vụ, phần lớn các thông tin tương tự được gửi
                        đến cho chúng tôi (bao gồm nhưng không giới hạn, địa chỉ
                        IP, hệ điều hành, v.v..); nhưng, thay vì các số lượt xem
                        trang, thiết bị của bạn gửi đến chúng tôi các thông tin
                        về nội dung, quảng cáo được xem và/hoặc phần mềm được
                        cài đặt bởi các Dịch vụ và Nền tảng và thời điểm.
                     </p>
                     <p>
                        <b>
                           <strong>5. COOKIES</strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        5.1. Đôi khi chúng tôi hoặc các nhà cung cấp dịch vụ
                        được cho phép và các đối tác quảng cáo của chúng tôi có
                        thể sử dụng “cookie” hoặc các tính năng khác để cho phép
                        chúng tôi hoặc các bên thứ ba thu thập hoặc chia sẻ
                        thông tin liên quan đến việc sử dụng của bạn đối với
                        Dịch vụ hoặc Nền tảng của chúng tôi. Các tính năng này
                        sẽ giúp chúng tôi cải thiện Nền tảng và Các Dịch Vụ
                        chúng tôi cung cấp, giúp chúng tôi đề xuất các dịch vụ
                        và tính năng mới, và/hoặc cho phép chúng tôi và các đối
                        tác quảng cáo của chúng tôi cung cấp các nội dung có
                        liên quan hơn đến bạn. “Cookie” là các mã danh định được
                        lưu trữ trên máy tính hoặc thiết bị di động của bạn lưu
                        trữ các dữ liệu về máy tính hoặc thiết bị, bằng cách nào
                        và khi nào Các Dịch Vụ hoặc Nền tảng được sử dụng hay
                        truy cập, bởi bao nhiêu người và để theo dõi những hoạt
                        động trong Các Nền tảng của chúng tôi. Chúng tôi có thể
                        liên kết thông tin cookie với dữ liệu cá nhân. Cookie
                        cũng liên kết với thông tin về những nội dung bạn đã
                        chọn để mua sắm và các trang web mà bạn đã xem. Thông
                        tin này được sử dụng để theo dõi giỏ hàng, để chuyển tải
                        nội dung phù hợp với sở thích của bạn, để cho phép các
                        đối tác cung cấp dịch vụ quảng cáo cung cấp dịch vụ
                        quảng cáo trên các trang thông qua mạng Internet và để
                        thực hiện phân tích dữ liệu và hoặc theo dõi việc sử
                        dụng Dịch vụ.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        5.2&nbsp;Bạn có thể từ chối sử dụng cookie bằng cách
                        chọn các thiết lập thích hợp trên trình duyệt hoặc thiết
                        bị của bạn. Tuy nhiên, vui lòng lưu ý rằng nếu bạn thực
                        hiện thao tác này bạn có thể không sử dụng được các chức
                        năng đầy đủ của Nền tảng hoặc Các Dịch Vụ của chúng tôi.
                     </p>
                     <p>
                        <b>
                           <strong>
                              6. CHÚNG TÔI SỬ DỤNG THÔNG TIN BẠN CUNG CẤP CHO
                              CHÚNG TÔI NHƯ THẾ NÀO?
                           </strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        6.1. Chúng tôi có thể thu thập, sử dụng, tiết lộ và/hoặc
                        xử lý dữ liệu cá nhân của bạn cho các mục đích sau đây:
                     </p>
                     <ul>
                        <li style={{ fontWeight: 400 }}>
                           để xem xét và/hoặc xử lý đơn đăng ký/giao dịch của
                           bạn với chúng tôi hoặc giao dịch hay thư từ của bạn
                           với các bên thứ ba qua Các Dịch Vụ;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để quản lý, điều hành, cung cấp và/hoặc quản lý việc
                           bạn sử dụng và/hoặc truy cập Các Dịch Vụ và các Nền
                           tảng của chúng tôi (bao gồm các sở thích của bạn),
                           cũng như quan hệ và tài khoản người dùng của bạn với
                           chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để đáp ứng, xử lý, giải quyết hoặc hoàn tất một giao
                           dịch và/hoặc đáp ứng các yêu cầu của bạn đối với các
                           sản phẩm và dịch vụ nhất định và thông báo cho bạn về
                           các vấn đề dịch vụ và các hoạt động tài khoản bất
                           thường;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để thực thi các Điều Khoản Dịch Vụ của chúng tôi hoặc
                           bất kỳ thỏa thuận giấy phép người dùng cuối nào áp
                           dụng;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để bảo vệ sự an toàn cá nhân và các quyền, tài sản
                           hoặc sự an toàn của người khác;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để phục vụ mục đích nhận dạng, xác minh, đánh giá
                           pháp lý hoặc để nhận biết khách hàng;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để đánh giá và đưa ra các quyết định liên quan đến hồ
                           sơ tín dụng và rủi ro của bạn và tính đủ điều kiện
                           cho các sản phẩm tín dụng;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để duy trì và quản lý bất kỳ bản cập nhật phần mềm
                           nào và/hoặc các bản cập nhật khác và sự hỗ trợ có thể
                           được yêu cầu tùy lúc nhằm đảm bảo Các Dịch Vụ của
                           chúng tôi hoạt động suôn sẻ;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để giải quyết hoặc tạo điều kiện thuận lợi cho dịch
                           vụ khách hàng, thực hiện các chỉ thị của bạn, giải
                           quyết hoặc trả lời bất kỳ thắc mắc nào được gửi bởi
                           (hoặc nhằm được gửi bởi) bạn hoặc thay mặt bạn;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để liên hệ với bạn hoặc liên lạc với bạn qua điện
                           thoại, tin nhắn văn bản và/hoặc tin nhắn fax, email
                           và/hoặc thư hoặc cách khác nhằm mục đích quản trị
                           và/hoặc quản lý quan hệ của bạn với chúng tôi hoặc
                           việc bạn sử dụng Các Dịch Vụ của chúng tôi, chẳng hạn
                           như ở việc truyền đạt thông tin hành chính cho bạn
                           liên quan đến Các Dịch Vụ của chúng tôi. Bạn xác nhận
                           và đồng ý rằng sự liên lạc như thế của chúng tôi có
                           thể là theo cách gửi thư qua đường bưu điện, tài liệu
                           hoặc thông báo cho bạn, có thể gồm có tiết lộ dữ liệu
                           cá nhân nhất định về bạn để cung cấp các tài liệu đó
                           cũng như trên bao bì/phong bì;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để cho phép các người dùng khác tương tác hoặc liên
                           lạc với bạn hoặc thấy một số hoạt động của bạn trên
                           Nền tảng, bao gồm để thông báo cho bạn khi một người
                           dùng khác đã gửi cho bạn một tin nhắn riêng tư hoặc
                           đăng nhận xét về bạn trên Nền tảng hoặc để liên kết
                           với việc bạn sử dụng các tính năng xã hội trên Nền
                           tảng;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để tiến hành các hoạt động nghiên cứu, phân tích và
                           phát triển (bao gồm nhưng không giới hạn phân tích dữ
                           liệu, khảo sát, phát triển và/hoặc lập đặc tính sản
                           phẩm và dịch vụ), để phân tích cách thức bạn sử dụng
                           Các Dịch Vụ của chúng tôi, để giới thiệu sản phẩm
                           và/hoặc dịch vụ theo sự quan tâm của bạn, để cải
                           thiện Các Dịch Vụ hoặc sản phẩm của chúng tôi và/hoặc
                           để cải thiện trải nghiệm khách hàng của bạn;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để cho phép kiểm tra và khảo sát khác để, ngoài những
                           hoạt động khác, xác thực quy mô và thành phần của đối
                           tượng mục tiêu của chúng tôi, và hiểu được trải
                           nghiệm của họ với Các Dịch Vụ của Yay;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           vì mục đích tiếp thị và quảng cáo, trong trường hợp
                           này, để gửi cho bạn qua các phương tiện và phương
                           thức liên lạc khác nhau, thông tin và tài liệu tiếp
                           thị và quảng bá liên quan đến các sản phẩm và/hoặc
                           dịch vụ (bao gồm, nhưng không giới hạn các sản phẩm
                           và/hoặc dịch vụ của các bên thứ ba mà Yay có thể hợp
                           tác hoặc liên kết) mà Yay (và/hoặc các bên liên kết
                           hoặc công ty có liên quan của nó) có thể bán, tiếp
                           thị hoặc quảng bá, cho dù các sản phẩm hoặc dịch vụ
                           đó tồn tại vào lúc này hoặc được tạo ra trong tương
                           lai. Bạn có thể hủy đăng ký nhận các thông tin tiếp
                           thị tại bất cứ thời điểm nào bằng cách sử dụng chức
                           năng hủy đăng ký trong các tài liệu tiếp thị điện tử.
                           Chúng tôi có thể sử dụng các thông tin liên hệ của
                           bạn để gửi các bản tin và/hoặc tài liệu truyền thông
                           từ chúng tôi hoặc từ các công ty có liên quan của
                           chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để đáp ứng các thủ tục pháp lý hoặc để tuân thủ hoặc
                           theo quy định của pháp luật hiện hành, và các yêu cầu
                           của cơ quan nhà nước có thẩm quyền hoặc yêu cầu của
                           bất cứ cơ quan tài phán nào hoặc khi chúng tôi thực
                           sự tin tưởng rằng việc tiết lộ thông tin là cần
                           thiết, bao gồm nhưng không giới hạn, đáp ứng các yêu
                           cầu đáp ứng các yêu cầu công bố thông tin theo yêu
                           cầu của bất kỳ luật ràng buộc nào đối với Yay hoặc
                           các công ty hoặc chi nhánh liên quan của Yay (bao
                           gồm, nếu có, việc hiển thị tên, chi tiết liên hệ và
                           chi tiết công ty của bạn);
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để lập số liệu thống kê và nghiên cứu đáp ứng yêu cầu
                           báo cáo và/hoặc duy trì sổ sách nội bộ hoặc theo quy
                           định;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để thực hiện quy trình tìm hiểu và xác minh hoặc các
                           hoạt động sàng lọc khác (bao gồm nhưng không giới hạn
                           kiểm tra lý lịch) tuân thủ các nghĩa vụ theo quy định
                           pháp luật hoặc cơ quan nhà nước có thẩm quyền hoặc
                           các thủ tục kiểm soát rủi ro của chúng tôi, có thể
                           được pháp luật yêu cầu hoặc có thể đã được chúng tôi
                           áp dụng;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để kiểm tra Các Dịch Vụ của chúng tôi hoặc hoạt động
                           của Yay;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để ngăn chặn hoặc điều tra bất kỳ hoạt động gian lận
                           thực tế hoặc bị nghi ngờ nào đối với Điều khoản dịch
                           vụ của chúng tôi, gian lận, các hành vi phi pháp,
                           thiếu sót hay hành vi sai trái nào, cho dù có liên
                           quan đến việc bạn sử dụng Các Dịch Vụ của chúng tôi
                           hay không hay bất kỳ vấn đề nào phát sinh từ quan hệ
                           của bạn với chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           Để đáp ứng bất cứ các mối đe dọa hoặc yêu cầu thực tế
                           nào được khẳng định chống lại Yay hoặc các yêu cầu
                           khác liên quan đến các Nội dung vi phạm quy định của
                           các bên thứ ba;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để lưu trữ, lập máy chủ, sao lưu (cho dù là vì mục
                           đích khôi phục sau thảm họa hoặc mục đích khác) đối
                           với dữ liệu cá nhân của bạn;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           để xử lý và/hoặc tạo thuận tiện cho một giao dịch tài
                           sản kinh doanh hoặc một giao dịch tài sản kinh doanh
                           tiềm năng, trường hợp giao dịch đó liên quan đến Yay
                           như một bên tham gia hoặc chỉ liên quan đến một công
                           ty hay công ty liên kết của Yay như một bên tham gia
                           hoặc liên quan đến Yay và/hoặc bất kỳ một hay nhiều
                           công ty hoặc công ty liên kết của Yay như (các) bên
                           tham gia, và có thể có các tổ chức bên thứ ba khác
                           tham gia giao dịch như thế. “Giao dịch tài sản kinh
                           doanh” là các giao dịch mua, bán, cho thuê, sáp nhập,
                           hợp nhất hoặc bất kỳ hoạt động mua lại, thanh lý hay
                           tài trợ nào của một tổ chức hoặc một phần của một tổ
                           chức hoặc của bất kỳ hoạt động kinh doanh hay tài sản
                           nào của một tổ chức; và/hoặc
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           bất kỳ mục đích nào mà chúng tôi thông báo cho bạn
                           tại thời điểm xin sự cho phép của bạn.
                        </li>
                     </ul>
                     <p style={{ fontWeight: 400 }}>
                        (gọi chung là “
                        <b>
                           <strong>Các Mục Đích</strong>
                        </b>
                        ”)
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        6.2. Bạn xác nhận, cho phép và đồng ý rằng chúng tôi có
                        thể truy cập, lưu trữ và tiết lộ thông tin Tài khoản và
                        Nội dung của bạn nếu luật pháp yêu cầu làm như vậy hoặc
                        theo lệnh của tòa án hoặc của bất kỳ cơ quan chính phủ
                        hoặc cơ quan quản lý nào có thẩm quyền đối với Yay hoặc
                        các chi nhánh của Yay hoặc với lý do chính đáng Yay tin
                        rằng việc truy cập, lưu giữ hoặc tiết lộ đó là cần thiết
                        và chính đáng để: (a) tuân thủ quy trình pháp lý; (b)
                        tuân thủ yêu cầu từ bất kỳ cơ quan chính phủ hoặc cơ
                        quan quản lý nào có thẩm quyền đối với Yay hoặc các chi
                        nhánh có liên quan của Yay; (c) thực thi Điều khoản Dịch
                        vụ của chúng tôi hoặc Chính sách Bảo mật này; (d) phản
                        hồi bất kỳ khiếu nại nào du cho là nguy cơ hoặc đang xảy
                        ra trên thực tế để chống lại Yay hoặc các chi nhánh có
                        liên quan hoặc khiếu nại khác rằng bất kỳ Nội dung nào
                        vi phạm quyền của bên thứ ba; (e) đáp ứng các yêu cầu
                        của bạn về dịch vụ khách hàng; hoặc (f) bảo vệ quyền,
                        tài sản hoặc sự an toàn cá nhân của Yay hoặc các chi
                        nhánh có liên quan, người dùng và / hoặc công chúng.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        6.3. Vì Các Mục Đích mà chúng tôi sẽ/có thể thu thập, sử
                        dụng, tiết lộ hoặc xử lý dữ liệu cá nhân của bạn phụ
                        thuộc vào hoàn cảnh hiện có, mục đích đó có thể không
                        xuất hiện bên trên. Tuy nhiên, chúng tôi sẽ thông báo
                        cho bạn biết mục đích khác đó tại thời điểm xin sự cho
                        phép của bạn, trừ phi việc xử lý dữ liệu áp dụng mà
                        không có sự đồng ý của bạn là được phép theo các quy
                        định của pháp luật về bảo vệ bí mật thông tin cá nhân
                        hoặc theo quy định pháp luật.
                     </p>
                     <p>
                        <b>
                           <strong>
                              7. YAY BẢO VỆ VÀ LƯU TRỮ THÔNG TIN KHÁCH HÀNG BẰNG
                              CÁCH NÀO?
                           </strong>
                        </b>
                     </p>
                     <div
                        className="mailmunch-forms-in-post-middle"
                        style={{ display: "none !important" }}
                     />
                     <p style={{ fontWeight: 400 }}>
                        7.1. Chúng tôi thực hiện các biện pháp bảo mật khác nhau
                        và luôn nỗ lực để đảm bảo sự an toàn của dữ liệu cá nhân
                        của bạn trên các hệ thống của chúng tôi. Dữ liệu cá nhân
                        của người dùng được lưu trữ đằng sau các mạng bảo mật và
                        chỉ có thể được truy cập bởi một số nhân viên có quyền
                        truy cập đặc biệt đến các hệ thống của chúng tôi. Tuy
                        nhiên, chắc chắn không thể có sự đảm bảo an ninh tuyệt
                        đối.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        7.2. Chúng tôi sẽ duy trì dữ liệu cá nhân tuân theo các
                        quy định của pháp luật về bảo vệ bí mật thông tin cá
                        nhân và/hoặc các điều luật hiện hành khác. Có nghĩa là,
                        chúng tôi sẽ hủy hoặc xóa thông tin nhận dạng ra khỏi dữ
                        liệu cá nhân của bạn khi chúng tôi có lý do hợp lý để
                        xác định rằng (i) việc lưu giữ dữ liệu cá nhân đó không
                        còn phục vụ mục đích thu thập dữ liệu cá nhân đó nữa;
                        (ii) việc lưu giữ không còn cần thiết cho bất kỳ mục
                        đích hợp pháp hay mục đích kinh doanh nào và (iii) không
                        còn các lợi ích hợp pháp nào khác để tiếp tục lưu giữ
                        các dữ liệu cá nhân này. Nếu bạn ngưng sử dụng Nền tảng
                        của chúng tôi, hoặc quyền của bạn được sử dụng Nền tảng
                        và/hoặc Các Dịch Vụ bị chấm dứt hoặc hủy bỏ, chúng tôi
                        có thể tiếp tục lưu, sử dụng và/hoặc tiết lộ dữ liệu cá
                        nhân của bạn tuân theo Chính sách bảo mật này và các
                        nghĩa vụ của chúng tôi theo các quy định của pháp luật
                        về bảo vệ bí mật thông tin cá nhân. Tùy thuộc vào quy
                        định của pháp luật, chúng tôi có thể tiêu hủy dữ liệu cá
                        nhân của bạn một cách an toàn mà không cần thông báo
                        trước cho bạn.
                     </p>
                     <p>
                        <b>
                           <strong>
                              8. YAY CÓ TIẾT LỘ THÔNG TIN THU THẬP TỪ NGƯỜI TRUY
                              CẬP HAY KHÔNG?
                           </strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        8.1. Trong quá trình thực hiện hoạt động kinh doanh,
                        chúng tôi sẽ/có thể cần phải sử dụng, xử lý, tiết lộ
                        và/hoặc chuyển giao dữ liệu cá nhân của bạn cho các nhà
                        cung cấp dịch vụ bên thứ ba, đại lý và/hoặc các công ty
                        liên kết hoặc công ty liên quan của chúng tôi, và/hoặc
                        các bên thứ ba khác có thể ở Việt Nam hoặc bên ngoài
                        Việt Nam, vì một hay nhiều Mục Đích nói trên, và việc
                        tiết lộ này sẽ được thực hiện theo đúng trình tự và quy
                        định của pháp luật hiện hành. Các nhà cung cấp dịch vụ
                        bên thứ ba, đại lý và/hoặc các công ty liên kết hoặc
                        công ty liên quan và/hoặc các bên thứ ba khác như thế sẽ
                        xử lý dữ liệu cá nhân của bạn hoặc thay mặt chúng tôi
                        hoặc khác, vì một hoặc nhiều Mục Đích nói trên. Chúng
                        tôi cố gắng đảm bảo rằng các bên thứ ba và các chi nhánh
                        của chúng tôi giữ an toàn cho dữ liệu cá nhân của bạn
                        khỏi bị truy cập, thu thập, sử dụng, tiết lộ, xử lý trái
                        phép hoặc các rủi ro tương tự và chỉ lưu giữ dữ liệu cá
                        nhân của bạn miễn là dữ liệu cá nhân của bạn vẫn còn cần
                        thiết cho những việc nêu trên Mục đích Các bên thứ ba
                        như thế bao gồm:
                     </p>
                     <ul>
                        <li style={{ fontWeight: 400 }}>
                           công ty con, công ty liên kết và công ty liên quan
                           của chúng tôi;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           những người sử dụng khác của Nền tảng của chúng tôi
                           cho một hoặc nhiều các Mục đích đã nêu ở trên;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ
                           ba khác mà chúng tôi thuê để hỗ trợ hoặc bổ sung cho
                           hoạt động kinh doanh của chúng tôi. Những bên này bao
                           gồm, nhưng không giới hạn ở những bên cung cấp các
                           dịch vụ quản trị hoặc các dịch vụ khác cho chúng tôi
                           chẳng hạn như công ty bưu chính, công ty viễn thông,
                           đối tác quảng cáo và truyền thông, công ty công nghệ
                           thông tin, các tổ chức hoạt động thương mại điện tử,
                           và trung tâm dữ liệu;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           các cơ quan chính phủ hoặc cơ quan quản lý có thẩm
                           quyền đối với Yay&nbsp;hoặc nếu được cho phép theo
                           Mục 6.2;
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           người mua hoặc người thừa nhiệm khác trong trường hợp
                           sáp nhập, thoái vốn, tái cơ cấu, tái tổ chức, giải
                           thể hoặc bán hay chuyển nhượng một phần hoặc tất cả
                           tài sản của Yay, cho dù là vấn đề đang diễn ra hay
                           đang trong thủ tục phá sản, thanh lý hoặc thủ tục
                           tương tự, trong đó dữ liệu cá nhân Yay lưu giữ về
                           người dùng của chúng tôi nằm trong các tài sản được
                           chuyển nhượng; hoặc cho một bên đối tác trong một
                           giao dịch tài sản kinh doanh mà Yay hoặc bất kỳ công
                           ty liên kết hay công ty liên quan nào của nó có tham
                           gia giao dịch; và
                        </li>
                        <li style={{ fontWeight: 400 }}>
                           bên thứ ba mà chúng tôi tiết lộ thông tin vì một
                           trong các Mục Đích và các bên thứ ba đó ngược lại họ
                           sẽ thu thập và xử lý dữ liệu cá nhân của bạn vì một
                           hoặc nhiều Mục Đích.
                        </li>
                     </ul>
                     <p style={{ fontWeight: 400 }}>
                        8.2. Chúng tôi có thể chia sẻ thông tin bao gồm thông
                        tin thống kê và nhân khẩu học về Người Dùng cũng như
                        thông tin về việc sử dụng Các Dịch Vụ của người dùng với
                        đối tác cung cấp dịch vụ quảng cáo và lập trình. Chúng
                        tôi cũng sẽ chia sẻ thông tin thống kê và thông tin nhân
                        khẩu học về người dùng của chúng tôi và việc họ sử dụng
                        Các Dịch Vụ với các đối tác quảng cáo và bên thứ ba cung
                        cấp dịch vụ quảng cáo, tái quảng cáo, và/hoặc lập trình.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        8.3. Để tránh nghi ngờ, trong trường hợp các quy định
                        của pháp luật về bảo vệ bí mật thông tin cá nhân hoặc
                        các điều luật hiện hành khác cho phép một tổ chức chẳng
                        hạn như chúng tôi thu thập, sử dụng hoặc tiết lộ dữ liệu
                        cá nhân của bạn mà không cần sự đồng ý của bạn, sự cho
                        phép như thế của pháp luật sẽ tiếp tục áp dụng. Phù hợp
                        với các quy định nêu trên và theo các quy định của pháp
                        luật hiện hành, chúng tôi có thể sử dụng dữ liệu cá nhân
                        của bạn cho các cơ sở pháp lý đã được công nhận, bao gồm
                        tuân thủ các nghĩa vụ pháp lý của chúng tôi, để thực
                        hiện hợp đồng của chúng tôi với bạn, để đạt được lợi ích
                        hợp pháp và lý do của chúng tôi để sử dụng dữ liệu đó
                        cao hơn bất kỳ phương hại nào đến quyền bảo vệ dữ liệu
                        của bạn hoặc khi cần thiết liên quan với một yêu cầu
                        pháp lý.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        8.4. Các bên thứ ba có thể chặn hoặc truy cập trái phép
                        dữ liệu cá nhân được gửi đến hoặc có trên trang web, các
                        công nghệ có thể hoạt động không chính xác hoặc không
                        hoạt động như dự kiến, hoặc có người có thể truy cập,
                        lạm dụng hoặc sử dụng sai trái thông tin mà không phải
                        lỗi của chúng tôi. Tuy nhiên chúng tôi sẽ triển khai các
                        biện pháp bảo mật hợp lý để bảo vệ dữ liệu cá nhân của
                        bạn theo quy định của các quy định của pháp luật về bảo
                        vệ bí mật thông tin cá nhân; tuy nhiên không thể đảm bảo
                        sự bảo mật tuyệt đối chẳng hạn như trường hợp tiết lộ
                        trái phép phát sinh từ hoạt động tin tặc vì ý đồ xấu
                        hoặc hành vi tấn cung tinh vi bưởi kẻ xấu mà không phải
                        lỗi của chúng tôi.
                     </p>
                     <p>
                        <b>
                           <strong>9. THÔNG TIN VỀ TRẺ EM</strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        9.1. Các Dịch Vụ này không dành cho trẻ em dưới 13 tuổi.
                        Chúng tôi không cố tình thu thập hay lưu giữ bất kỳ dữ
                        liệu cá nhân hay thông tin không nhận dạng cá nhân nào
                        của bất kỳ ai dưới 13 tuổi, bất kỳ phần nào của Nền tảng
                        của chúng tôi hoặc Các Dịch Vụ khác cũng không dành cho
                        trẻ em dưới 13 tuổi. Bố/mẹ hoặc người giám hộ của trẻ em
                        dưới 13 tuổi vui lòng giám sát và đảm bảo thông tin cá
                        nhân của trẻ dưới 13 tuổi mà mình đang giám hộ không
                        đăng tải thông tin cá nhân cho Yay. Trong trường hợp
                        thông tin cá nhân của của trẻ em dưới 13 tuổi do quý phụ
                        huynh giám hộ được cung cấp cho Yay, Bố/mẹ hoặc người
                        giám hộ theo đồng ý với việc xử lý thông tin của trẻ em
                        dưới 13 tuổi có liên quan, và đồng ý chịu sự điều chỉnh
                        của Chính Sách này thay mặt cho người được giám hộ.
                        Chúng tôi sẽ khóa bất kỳ tài khoản nào chỉ được sử dụng
                        bởi đối tượng trẻ em như vậy và sẽ gỡ và/hoặc xóa bất kỳ
                        dữ liệu cá nhân nào mà chúng tôi cho là đã được gửi bởi
                        bất kỳ trẻ em nào dưới 13 tuổi.
                     </p>
                     <p>
                        <b>
                           <strong>
                              10. THÔNG TIN THU THẬP BỞI CÁC BÊN THỨ BA
                           </strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        10.1. Nền tảng của chúng tôi sử dụng Google Analytics,
                        một dịch vụ phân tích web được cung cấp bởi Google, Inc.
                        (“Google”). Google Analytics sử dụng cookie, là các tập
                        tin văn bản trên thiết bị của bạn, để giúp Nền tảng phân
                        tích cách thức người dùng sử dụng Nền tảng của chúng
                        tôi. Thông tin được tạo bởi cookie về việc bạn sử dụng
                        Nền tảng (bao gồm địa chỉ IP của bạn) sẽ được gửi đến và
                        lưu bởi Google trên các máy chủ tại Hoa Kỳ. Google sẽ sử
                        dụng thông tin này để đánh giá việc bạn sử dụng Nền tảng
                        của chúng tôi, soạn báo cáo về hoạt động trang web dành
                        cho các nhà điều hành trang web và cung cấp các dịch vụ
                        khác liên quan đến hoạt động trang web và việc sử dụng
                        Internet. Google cũng có thể gửi thông tin này cho các
                        bên thứ ba trong trường hợp luật pháp có quy định như
                        thế, hoặc trường hợp các bên thứ ba đó xử lý thông tin
                        thay mặt Google. Google sẽ không liên kết địa chỉ IP của
                        bạn với bất kỳ dữ liệu nào khác mà Google nắm giữ.
                     </p>
                     <p>
                        <b>
                           <strong>
                              11. LOẠI TRỪ TRÁCH NHIỆM VỀ NGHĨA VỤ BẢO MẬT VÀ
                              CÁC TRANG WEB BÊN THỨ BA
                           </strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        11.1. CHÚNG TÔI KHÔNG ĐẢM BẢO TÍNH BẢO MẬT ĐỐI VỚI DỮ
                        LIỆU CÁ NHÂN VÀ/HOẶC THÔNG TIN KHÁC MÀ BẠN CUNG CẤP TRÊN
                        CÁC TRANG WEB CỦA BÊN THỨ BA. Chúng tôi thực hiện các
                        biện pháp bảo mật khác nhau để duy trì sự an toàn của dữ
                        liệu cá nhân của bạn mà chúng tôi lưu giữ hoặc kiểm
                        soát. Dữ liệu cá nhân của bạn được lưu đằng sau các mạng
                        bảo mật và chỉ có thể được truy cập bởi một số cá nhân
                        giới hạn có quyền truy cập đặc biệt đến các hệ thống của
                        chúng tôi, và đã được yêu cầu bảo mật dữ liệu cá nhân
                        đó. Khi bạn đặt hàng hoặc truy cập dữ liệu cá nhân của
                        bạn, chúng tôi đề nghị sử dụng một máy chủ bảo mật. Tất
                        cả dữ liệu cá nhân hoặc thông tin cá nhân bạn cung cấp
                        sẽ được mã hóa vào các cơ sở dữ liệu của chúng tôi để
                        chỉ được truy cập như mô tả bên trên.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        11.2. Nhằm cung cấp cho bạn giá trị gia tăng, chúng tôi
                        có thể chọn các trang web hoặc ứng dụng hoặc dịch vụ của
                        bên thứ ba khác nhau để liên kết, và đóng khung bên
                        trong Nền tảng. Chúng tôi cũng có thể tham gia các quan
                        hệ cùng tiếp thị và các quan hệ khác để cung cấp dịch vụ
                        thương mại điện tử và các dịch vụ và tính năng khác cho
                        khách truy cập. Những trang được liên kết này có các
                        chính sách về quyền riêng tư cũng như các biện pháp bảo
                        mật riêng và độc lập. Ngay cả khi bên thứ ba đó có liên
                        kết với chúng tôi, chúng tôi cũng không kiểm soát các
                        trang web/ứng dụng/dịch vụ được liên kết này, mỗi trang
                        đó có các phương pháp bảo vệ quyền riêng tư và thu thập
                        dữ liệu riêng biệt, độc lập với chúng tôi. Dữ liệu thu
                        thập bởi các đối tác cùng tiếp thị của chúng tôi hoặc
                        các trang web/ứng dụng/dịch vụ của bên thứ ba (ngay cả
                        khi được cung cấp trên hoặc thông qua Nền tảng của chúng
                        tôi) có thể không được chúng tôi tiếp cận và/hoặc lưu
                        giữ.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        11.3. Do đó chúng tôi không chịu trách nhiệm hay trách
                        nhiệm pháp lý đối với nội dung, các biện pháp bảo mật
                        (hoặc sự thiếu biện pháp bảo mật) và các hoạt động của
                        các trang web/ứng dụng/dịch vụ được liên kết này. Những
                        trang web/ứng dụng/dịch vụ được liên kết này chỉ vì sự
                        thuận tiện cho bạn và do đó bạn tự chịu trách nhiệm khi
                        truy cập chúng. Tuy nhiên, chúng tôi tìm cách bảo vệ
                        tính toàn vẹn của Nền tảng của chúng tôi và các liên kết
                        được đặt trên từng trang web đó và do đó chúng tôi hoan
                        nghênh ý kiến phản hồi về các trang web được liên kết
                        này (bao gồm nếu một trang web cụ thể không hoạt động).
                     </p>
                     <p>
                        <b>
                           <strong>
                              12. BẠN CÓ THỂ RÚT TÊN, XÓA TÊN, YÊU CẦU TRUY CẬP
                              HOẶC ĐIỀU CHỈNH THÔNG TIN BẠN ĐÃ CUNG CẤP CHO
                              CHÚNG TÔI BẰNG CÁCH NÀO?
                           </strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        12.1.
                        <em>
                           &nbsp;<u>Rút Lại Sự Đồng Ý</u>
                        </em>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        12.1.1 Bạn có thể rút lại sự đồng ý cho phép thu thập,
                        sử dụng và/hoặc tiết lộ và/hoặc yêu cầu xóa dữ liệu cá
                        nhân của bạn mà chúng tôi đang lưu giữ hoặc kiểm soát
                        bằng cách gửi email cho chúng tôi tại địa chỉ email
                        yay.saigon@gmail.com, chúng tôi sẽ xử lý các yêu cầu này
                        theo Chính Sách Bảo Mật cũng như quy định pháp luật có
                        liên quan. Tuy nhiên, việc bạn rút lại sự cho phép của
                        bạn có thể đồng nghĩa với việc chúng tôi sẽ không thể
                        tiếp tục cung cấp các Dịch vụ đến bạn và chúng tôi có
                        thể cần phải chấm dứt mối quan hệ hiện tại giữa bạn
                        và/hoặc hợp đồng mà bạn có với Chúng tôi.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        12.2.{" "}
                        <em>Yêu Cầu Truy Cập đến hoặc Sửa Dữ Liệu Cá Nhân</em>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        12.2.1 Nếu bạn đã đăng ký một tài khoản với chúng tôi,
                        cá nhân bạn có thể truy cập và/hoặc sửa dữ liệu cá nhân
                        của bạn mà chúng tôi đang lưu giữ hoặc kiểm soát thông
                        qua trang Thiết Lập Tài Khoản hoặc nhãn trên Nền tảng.
                        Nếu bạn chưa đăng ký tài khoản với chúng tôi, cá nhân
                        bạn có thể yêu cầu truy cập và/hoặc sửa dữ liệu cá nhân
                        của bạn mà chúng tôi đang lưu giữ hoặc kiểm soát bằng
                        cách gửi yêu cầu bằng văn bản cho chúng tôi. Chúng tôi
                        sẽ cần có đủ thông tin từ bạn để xác định danh tính của
                        bạn cũng như bản chất yêu cầu của bạn để có thể giải
                        quyết yêu cầu của bạn. Do đó, vui lòng gửi yêu cầu bằng
                        văn bản của bạn bằng cách gửi email cho chúng tôi tại
                        địa chỉ email yay.saigon@gmail.com.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        12.2.2 Chúng tôi có thể tính một khoản phí hợp lý cho
                        bạn để giải quyết và xử lý yêu cầu truy cập dữ liệu cá
                        nhân của bạn. Nếu chúng tôi có tính phí, chúng tôi sẽ
                        cung cấp cho bạn ước tính lệ phí bằng văn bản. Vui lòng
                        lưu ý rằng chúng tôi không buộc phải đáp ứng hay giải
                        quyết yêu cầu truy cập của bạn trừ phi bạn đã đồng ý
                        đóng phí.
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        12.2.3 Chúng tôi bảo lưu quyền từ chối sửa dữ liệu cá
                        nhân của bạn theo các quy định của pháp luật về bảo vệ
                        bí mật thông tin cá nhân, trường hợp các điều luật đó
                        yêu cầu và/hoặc cho phép một tổ chức từ chối sửa dữ liệu
                        cá nhân trong các trường hợp như thế.
                     </p>
                     <p>
                        <b>
                           <strong>
                              13. THẮC MẮC, QUAN NGẠI HOẶC KHIẾU NẠI? LIÊN HỆ
                              VỚI CHÚNG TÔI
                           </strong>
                        </b>
                     </p>
                     <p style={{ fontWeight: 400 }}>
                        13.1. Nếu bạn có bất kỳ thắc mắc hoặc khiếu nại nào về
                        các phương pháp bảo vệ quyền riêng tư của chúng tôi vui
                        lòng liên hệ với chúng tôi tại địa chỉ email
                        yay.saigon@gmail.com.
                     </p>
                  </div>
                  <p />
                  <div
                     className="mailmunch-forms-after-post"
                     style={{ display: "none !important" }}
                  />
               </div> */}
            </div>
         </div>
      </div>
   );
});

export default Security;
