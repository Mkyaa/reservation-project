import React from 'react'

//styles
import styles from './index.module.css'

//components
import Slider from '@/components/home/slider'
import FeaturesCard from '@/components/home/featuresCard'
import Explore from '@/components/home/explore'
import WhyUs from '@/components/home/whyUs'
import BlogCard from '@/components/home/blogCard'

const HomeContainer = () => {

  return (
    <div className={styles.homeContainer}>
      <Slider />
      <FeaturesCard />
      <Explore />
      <div className={styles.explainContainer}>
        <div className={styles.explainContent}>
          <h1 className={styles.explainTitle}>Uçak Bileti Almanın Püf Noktaları Nelerdir?</h1>
          <p>
            Seyahatlerinizde uçağı tercih ederek hem daha hızlı hem de daha konforlu yolculuk yapabilirsiniz.
            Yurt içi ve yurt dışı tatil rotaları keşfetmek için uçakla yolculuk yapmak her açıdan avantaj sağlamaktadır.
            bileti bazı dönemlerde uygun fiyatlara alınabilirken özellikle yoğunluğun zirveye ulaştığı zamanlarda fiyatlarda yükselme olabilir.
            Uçak bileti ucuz olan uçuşları tercih ederek bütçenizi koruyabilir ve yüksek konforlu seyahatin tadını çıkarabilirsiniz. Uçak bileti almanın püf noktaları ile her yolculuğunuzda uygun fiyat avantajlarından yararlanabilirsiniz.
            Uçak bileti fiyatları, uçuşun tarihine göre değişiklik gösterir. Hafta sonlarında oluşan talep yoğunluğu nedeniyle indirimli uçak biletleri bulmak zorlaşır.
            Ayrıca biletlere olan ilgi, hafta sonlarında bilet fiyatlarının da yükselmesine neden olur. Uygun fiyata bilet satın almak istiyorsanız seyahat edeceğiniz tarihi göz önünde bulundurmanızı tavsiye ederiz.
          </p>
          <h3>Uygun Fiyata Uçak Bileti Alın!</h3>
          <p>
            Ucuz uçak bileti almanın bir diğer yolu da farklı havalimanlarını tercih etmekten geçer. Gitmek istediğiniz yerin yakınlarında birden fazla havalimanı bulunuyorsa bu noktalara hareket eden uçakların fiyatlarını karşılaştırabilirsiniz. Operasyonel durumlar nedeniyle çok yakın olan havalimanlarına giden uçaklarda bile fiyat farkları oluşabilir. Karşılaştırma sonucunda uygun olan seçeneği seçerek gitmek istediğiniz yere kolayca ulaşabilir ve tasarruf edebilirsiniz.
          </p>
        </div>
      </div>
      <WhyUs />
      <BlogCard />
    </div>
  )
}

export default HomeContainer