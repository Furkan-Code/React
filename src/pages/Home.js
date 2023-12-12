import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from "../assets/Kuşseması.jpg"
import BannerImage1 from "../assets/world_map_home.png"
import BannerImage2 from "../assets/social.jpg"
import BannerImage3 from "../assets/images.jfif"
import BannerImage4 from "../assets/images1.jpg"
import BannerImage5 from "../assets/images2.jpg"
import BannerImages6 from "../assets/sosyal.png"
import "../styles/Home.css"


function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='font'>
          <h1>AFETANKANET</h1>
        </div>
        <div className='font1'>
          AfetAnkaNET: Afetlerde Yeniden Doğuşunuz İçin Yanınızda!

          Karşınızda, afetlerle mücadelede en güçlü destekçiniz: AfetAnkaNET. Mitolojik Anka kuşunun yeniden doğuşunu simgeleyen bu platform, afetlerin hemen ardından toparlanma sürecinizi hızlandırmak için tasarlandı.

          Afetlerde bilgiye erişim hayati öneme sahiptir. AfetAnkaNET, en güncel afet verilerini, sosyal medya akışlarını ve acil durum bilgilerini tek bir platformda toplayarak sizlere ulaştırıyor.

          Gelin, afetlerin gölgesinde bile güvende olmanın ve topluluklarla birlikte yeniden doğmanın gücünü birlikte deneyimleyelim. AfetAnkaNET, afet bilgilendirme ve yönetiminde yenilikçi bir adım!
        </div>


      </div>
      <div className='font3'></div>
      <div className='font2' >
        <div className='resim1' style={{ backgroundImage: `url(${BannerImage1})`, borderRadius: 25 }}></div>
        <div className='font4'><b>Canlı Afet Haritası</b><br></br>
          Yaşanan afetleri gerçek zamanlı olarak harita üzerinden takip edin.</div>
        <div className='resim2' style={{ backgroundImage: `url(${BannerImage2})`, borderRadius: 25 }}></div>

        <div className='resim3' style={{ backgroundImage: `url(${BannerImage3})`, borderRadius: 25 }}></div>
        <div className='resim4' style={{ backgroundImage: `url(${BannerImage4})`, borderRadius: 25 }}></div>
        <div className='resim5' style={{ backgroundImage: `url(${BannerImage5})`, borderRadius: 25 }}></div>
        <div className='font6'><b>Sosyal Medya Akışı </b><br></br>
          Seçilen hashtaglerle afetlere dair paylaşımlara erişin ve bilginin doğruluğunu değerlendirin.</div>
        <div className='font7'><b>Afet Haberleri</b><br></br>
          Afetlerle ilgili  tüm haberlere anında erişin.</div>
        <div className='font8'><b>Yardımlaşma Platformu </b><br></br>
          Farklı iller için yardım platformları oluşturun, ihtiyaç listesi paylaşın ve diğer kullanıcılarla iletişim kurun.</div>
        <div className='font9'><b>Acil Durum Bilgileri </b><br></br>
          Büyük bir afet sonrası yapılması gerekenler, acil numaralar ve daha fazlası.</div>
        <div className='font5'></div>
        <div className='font10'>
          <div className='clr'>
            Hakkımızda
          </div>
          <div className='clr1'>
            SSS
          </div>
          <div className='clr2' style={{ backgroundImage: `url(${BannerImages6})` }}>

          </div>
          <div className='clr3' ></div>
          <div className='clr4'></div>
          <div className='clr5'>Gizlilik Sözleşmesi</div>
          <div className='clr6'>Kullanım Koşulları</div>


        </div>
      </div>
    </div>
  )
}

export default Home