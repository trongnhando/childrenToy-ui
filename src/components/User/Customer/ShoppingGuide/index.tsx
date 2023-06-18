import React from "react";
import Sidebar from "../../../Common/Sidebar";

const ShoppingGuide = React.memo(() => {
   return (
      <div className="div-contai flex mt-5">
         <div className="w-1/4">
            <Sidebar />
         </div>
         <div className="w-3/4 bg-white rounded p-5 text-justify">
            <div className="uppercase text-2xl font-bold text-center">
               hướng dẫn mua hàng
            </div>
            <div className="flex flex-col mt-5">
               <div className="uppercase font-bold text-xl">
                  BƯỚC 1: ĐĂNG KÝ TÀI KHOẢN
               </div>
               <div className="my-2">
                  Để bắt đầu mua hàng trên yay.toys và được hưởng những ưu đãi
                  hấp dẫn nhất, hãy dành 1 phút để tạo tài khoản bằng Email cá
                  nhân, tài khoản Facebook hoặc tài khoản Google. Ở những lần
                  mua hàng sau, bạn chỉ cần truy cập Website yay.toys, đăng nhập
                  và tiến hành mua sắm mà không cần tạo tài khoản mới.
               </div>
               <div className="uppercase font-bold text-xl">
                  BƯỚC 2: TÌM KIẾM VÀ TÌM HIỂU THÔNG TIN SẢN PHẨM
               </div>
               <div className="my-2">
                  Để tìm kiếm sản phẩm phù hợp với nhu cầu bản thân, bạn có thể
                  tham khảo 2 cách sau:
               </div>
               <ul>
                  <li className="ps-5">
                     - Cách 1: Truy cập Menu Đồ chơi và lựa chọn sản phẩm theo
                     từng Danh mục
                  </li>
                  <li className="ps-5">
                     - Cách 2: Nhập tên sản phẩm hoặc tên thương hiệu cần tìm
                     vào thanh “Tìm kiếm”
                  </li>
               </ul>
               <div className="my-2">
                  Sau khi tìm được sản phẩm ưng ý, bạn có thể tìm hiểu thông tin
                  chi tiết về sản phẩm tại mục MÔ TẢ SẢN PHẨM và THÔNG TIN SẢN
                  PHẨM. Ngoài ra, bạn cũng có thể tham khảo thêm Feedback của
                  các khách hàng khác đã mua và trải nghiệm sản phẩm tại mục
                  NHẬN XÉT SẢN PHẨM.
               </div>
               <div className="uppercase font-bold text-xl">
                  BƯỚC 3: ĐẶT HÀNG
               </div>
               <div className="mt-2">
                  Sau khi kiểm tra kỹ sản phẩm trong giỏ hàng, bạn vui lòng nhập
                  đầy đủ thông tin cá nhân và mã khuyến mãi (nếu có) theo nhu
                  cầu của mình.
               </div>
               <div className="mt-2">
                  Khi cần kiểm tra đơn hàng, bạn vui lòng liên hệ trực tiếp đến
                  Fanpage hoặc hotline 097 88 99 150 / 0968 56 56 59.
               </div>
               <div className="mt-2 text-base font-bold">
                  LƯU Ý VỀ MÃ KHUYẾN MÃI
               </div>
               <ul className="my-2">
                  <li className="ps-5">
                     - Mỗi đơn hàng chỉ áp dụng duy nhất 1 mã khuyến mãi.
                  </li>
                  <li className="ps-5">
                     - Khi có quà đi kèm với đơn hàng, món quà đó cũng phải thể
                     hiện trong giỏ hàng của bạn trước khi đặt hàng. Bạn vui
                     lòng liên hệ trực tiếp với fanpage khi cần hỗ trợ về mã
                     khuyến mãi.
                  </li>
                  <li className="ps-5">
                     - Đối với những mã khuyến mãi áp Yay gửi riêng cho bạn –
                     những mã khuyến mãi này chỉ áp dụng khi đơn hàng được thực
                     hiện bởi tài khoản của bạn, Yay sẽ KHÔNG hỗ trợ đổi/trả
                     phần quà nếu như bạn nhập nhầm MÃ KHUYẾN MÃI. Vậy nên, vui
                     lòng kiểm tra thật kỹ phần quà nhận được sau khi áp dụng Mã
                     khuyến mãi trước khi tiến hành đặt mua sản phẩm.
                  </li>
               </ul>
               <div className="uppercase font-bold text-xl">
                  BƯỚC 4: PHƯƠNG THỨC THANH TOÁN & CÁCH THỨC NHẬN HÀNG
               </div>
               <div className="mt-2">
                  Nhập địa chỉ giao hàng, đồng thời lựa chọn phương thức nhận
                  hàng, thanh toán một cách chính xác và chọn các dịch vụ kèm
                  theo nếu có nhu cầu. Sau khi xác nhận đặt hàng, bạn sẽ nhận
                  được mã đơn hàng và email xác nhận từ Yay. Hãy lưu lại mã đơn
                  hàng để bộ phận CSKH của chúng tôi có thể giải quyết các thắc
                  mắc cho bạn trong trường hợp cần thiết.
               </div>
               <div className="mt-2">
                  Khi có nhu cầu cần kiểm tra trạng thái đơn hàng, vui lòng liên
                  hệ trực tiếp đến Fanpage hoặc hotline 097 88 99 150 / 0968 56
                  56 59.
               </div>
               <div className="mt-2 font-bold">
                  <i>
                     Yay xin chân thành cảm ơn và chúc bạn có một trải nghiệm
                     mua sắm tốt đẹp!
                  </i>
               </div>
            </div>
         </div>
      </div>
   );
});

export default ShoppingGuide;