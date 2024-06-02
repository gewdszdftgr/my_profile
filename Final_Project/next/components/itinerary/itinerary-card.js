import React from 'react'
import Image from 'next/image'
import styles from '@/styles/itineraryCard.module.css'

export default function itineraryCard() {
  return (
    <>
      <section className={styles.itineraryCard}>
        <div>
          <h2 className={styles.itineraryCountryH2}>各國行程</h2>
        </div>
        <div className={styles.itineraryDepartureLine}></div>
        <div className={styles.moduleContainer}>
          <div className={styles.moduleItems}>
            <div>
              <Image
                className={styles.imgCountry}
                src="/images/秘魯・印加帝國15日.jpg"
                alt=""
                width={375}
                height={293}
              />
            </div>
            <div className={styles.moduleH3}>
              <h3 className={styles.h3Country}>秘魯・印加帝國15日</h3>
            </div>
            <div className={styles.moduleH4}>
              <h4 className={styles.h4Country}>
                星宇豪華經濟艙・世界七大奇景馬丘比丘・印加都城庫斯科・魔幻打卡聖地彩虹山
              </h4>
            </div>
            <section className={styles.cardDiv3}>
              <div className={styles.cardDiv1}>&nbsp;</div>
              <div className={styles.cardDiv2}>
                <a
                  className={styles.cardDiv2}
                  href="http://localhost:3000/itinerary-product/3"
                  // href={`http://localhost:3000/itinerary-order/${travel_id}`}
                >
                  點此報名
                </a>
              </div>
            </section>
          </div>

          <div className={styles.moduleItems}>
            <div>
              <Image
                className={styles.imgCountry}
                src="/images/智利・15日.jpg"
                alt=""
                width={375}
                height={293}
              />
            </div>
            <div className={styles.moduleH3}>
              <h3 className={styles.h3Country}>智利・15日</h3>
            </div>
            <div className={styles.moduleH4}>
              <h4 className={styles.h4Country}>
                與世隔絕復活節島．藍湖仙境百內國家公園．世界最乾旱阿塔卡馬沙漠．智利酒莊道地佳釀
              </h4>
            </div>
            <section className={styles.cardDiv3}>
              <div className={styles.cardDiv1}>&nbsp;</div>
              <div className={styles.cardDiv2}>
                <a
                  className={styles.cardDiv2}
                  href="http://localhost:3000/itinerary-product/47"
                  // href={`http://localhost:3000/itinerary-order/${travel_id}`}
                >
                  點此報名
                </a>
              </div>
            </section>
          </div>
          <div className={styles.moduleItems}>
            <div>
              <Image
                className={styles.imgCountry}
                src="/images/阿根廷・14日.jpg"
                alt=""
                width={375}
                height={293}
              />
            </div>
            <div className={styles.moduleH3}>
              <h3 className={styles.h3Country}>阿根廷・14日</h3>
            </div>
            <div className={styles.moduleH4}>
              <h4 className={styles.h4Country}>
                世界遺產萬年冰川健行、世界最寬伊瓜蘇瀑布、世界盡頭火地島、南美巴黎布宜諾斯艾利斯
              </h4>
            </div>
            <section className={styles.cardDiv3}>
              <div className={styles.cardDiv1}>&nbsp;</div>
              <div className={styles.cardDiv2}>
                <a
                  className={styles.cardDiv2}
                  href="http://localhost:3000/itinerary-product/29"
                  // href={`http://localhost:3000/itinerary-order/${travel_id}`}
                >
                  點此報名
                </a>
              </div>
            </section>
          </div>
          <div className={styles.moduleItems}>
            <div>
              <Image
                className={styles.imgCountry}
                src="/images/古巴・迷情之境12日.jpg"
                alt=""
                width={375}
                height={293}
              />
            </div>
            <div className={styles.moduleH3}>
              <h3 className={styles.h3Country}>古巴・迷情之境12日</h3>
            </div>
            <div className={styles.moduleH4}>
              <h4 className={styles.h4Country}>
                世界遺產哈瓦那老城．古董車．雪茄．蘭姆酒．海明威朝聖路線．切格瓦拉革命國度
              </h4>
            </div>
            <section className={styles.cardDiv3}>
              <div className={styles.cardDiv1}>&nbsp;</div>
              <div className={styles.cardDiv2}>
                <a
                  className={styles.cardDiv2}
                  href="http://localhost:3000/itinerary-product/7"
                  // href={`http://localhost:3000/itinerary-order/${travel_id}`}
                >
                  點此報名
                </a>
              </div>
            </section>
          </div>
          <div className={styles.moduleItems}>
            <div>
              <Image
                className={styles.imgCountry}
                src="/images/九州鯉躍春遊５日.jpg"
                alt=""
                width={375}
                height={293}
              />
            </div>
            <div className={styles.moduleH3}>
              <h3 className={styles.h3Country}>九州鯉躍春遊５日</h3>
            </div>
            <div className={styles.moduleH4}>
              <h4 className={styles.h4Country}>
                雙鐵道、雙遊船、日田小京都、春季限定鯉魚旗祭典、熊本熊甜點杯、米塚、草千里
              </h4>
            </div>
            <section className={styles.cardDiv3}>
              <div className={styles.cardDiv1}>&nbsp;</div>
              <div className={styles.cardDiv2}>
                <a
                  className={styles.cardDiv2}
                  href="http://localhost:3000/itinerary-product/22"
                  // href={`http://localhost:3000/itinerary-order/${travel_id}`}
                >
                  點此報名
                </a>
              </div>
            </section>
          </div>
          <div className={styles.moduleItems}>
            <div>
              <Image
                className={styles.imgCountry}
                src="/images/閃耀九州X浪漫銀光５日.jpg"
                alt=""
                width={375}
                height={293}
              />
            </div>
            <div className={styles.moduleH3}>
              <h3 className={styles.h3Country}>閃耀九州X浪漫銀光5日</h3>
            </div>
            <div className={styles.moduleH4}>
              <h4 className={styles.h4Country}>
                銀光閃耀之街、九州野生公園叢林巴士、由布院金鱗湖、世界童話村、三隈川屋形船晚宴
              </h4>
            </div>
            <section className={styles.cardDiv3}>
              <div className={styles.cardDiv1}>&nbsp;</div>
              <div className={styles.cardDiv2}>
                <a
                  className={styles.cardDiv2}
                  href="http://localhost:3000/itinerary-product/24"
                  // href={`http://localhost:3000/itinerary-order/${travel_id}`}
                >
                  點此報名
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
