import styles from '../Body/Carts.module.css'

const Carts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text1}>
                <p className={styles.p1}>Туры по Дагестану
                </p>
                <p className={styles.p2}>с EtnoTravel</p>
            </div>
            <div className={styles.text2}>
                <p>Многодневные авторские туры из Махачкалы для групп и
            подбор индивидуальных маршрутов - испытайте новые впечатления от пешего похода,
            сплава на байдарках или поездки по холмам на джипах.</p>
            </div>
            <div className={styles.text3}>
                <p>
                    Список туров на 2023 год
                </p>
            </div>
            <div className={styles.contTour}>
                <div className={styles.bodyTour}>
                <div>
                    <div className={styles.tourText}>
                        <p className={styles.tourp1}>Тур в Грузию</p>
                        <p className={styles.tourp2}>Отпуск в Тбилисии!</p>
                    </div>
                    <div className={styles.contText}>
                        <div className={styles.data}>
                            <p>14.12.2023 - 17.12.2023</p>
                            <p>07.01.2024 - 10.01.2024</p>
                        </div>
                        <div>
                            <p className={styles.price}>15 000 руб</p>
                        </div>
                        <button className={styles.buttonTour}>Смотреть тур</button>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.contCart}>
                <div className={styles.bodyCart}>
                    <div className={styles.textCatr1}>
                        <p className={styles.cartText1}>Тур "5 чудес Чечни"</p>
                        <p className={styles.cartText2}>Все включено!</p>
                    </div>
                    <div className={styles.textCart2}>
                        <p>Тур по самым популярным локациям Чечни</p>
                        <br />
                        <p>40 000 руб</p>
                    </div>
                </div>
            </div>
            <div className={styles.contInfo}>
                <div className={styles.contTextInfo}>
                        <p className={styles.textInfo1}>Наша команда гидов-экскурсоводов</p>
                        <p className={styles.textInfo2}>На фотографиях ниже — люди, которые создали семью EtnoTrvel.
                            Они ответят на все вопросы и помогут с организацией тура.
                            Все гиды в нашей команде – профессиональные путешественники с многолетним опытом.</p>
                </div>
            </div>
            <div className={styles.contGid}>
                <div className={styles.bodyGid}>
                    <div className={styles.infoGid}>
                        <div className={styles.image}></div>
                        <div className={styles.infoGidCart}>
                        <p className={styles.nameGid}>Мухьаммад-Амин</p>
                        <p className={styles.author}>Автор туров</p>
                        <p className={styles.organiz}>Организация индивидуальных многодневных туров, однодневных групповых экскурсий по всему Чечню.</p>
                        </div>
                    </div>
                    <div className={styles.infoGid2}>
                        <div className={styles.image2}></div>
                        <div className={styles.infoGidCart2}>
                        <p className={styles.nameGid2}>Мухьаммад-Амин</p>
                        <p className={styles.author2}>Автор туров</p>
                        <p className={styles.organiz2}>Организация индивидуальных многодневных туров, однодневных групповых экскурсий по всему Чечню.</p>
                        </div>
                    </div>
                    <div className={styles.infoGid3}>
                        <div className={styles.image3}></div>
                        <div className={styles.infoGidCart3}>
                        <p className={styles.nameGid3}>Мухьаммад-Амин</p>
                        <p className={styles.author3}>Автор туров</p>
                        <p className={styles.organiz3}>Организация индивидуальных многодневных туров, однодневных групповых экскурсий по всему Чечню.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contTourInfoPer}>
                <div className={styles.bodyTourInfoPer}>
                    <p className={styles.textTourPer}>Туры с перелетом</p>
                    <p className={styles.textTourPer2}>В Дагестан можно попасть разными способами, но быстрее и проще - лететь самолетом.
                         Из Москвы и некоторых городов есть прямые рейсы до Махачкалы и обратно,
                         а остальным чаще легче добираться перелетом через эти города.</p>
                </div>
            </div>
            <div className={styles.contList}>
                <div className={styles.bodyList}>
                    <p className={styles.textList1}>Список городов с перелетом до Чечни:</p>
                    <div className={styles.sitiesText}>
                    <div className={styles.textSity}>
                    <p>Москва</p>
                    <p>Уфа</p>
                    <p>Санкт-Петербург</p>
                    <p>Сургут</p>
                    </div>
                    <div className={styles.textSity2}>
                    <p>Москва</p>
                    <p>Уфа</p>
                    <p>Санкт-Петербург</p>
                    <p>Сургут</p>
                    </div>
                    <div className={styles.textSity3}>
                    <p>Москва</p>
                    <p>Уфа</p>
                    <p>Санкт-Петербург</p>
                    <p>Сургут</p>
                    </div>
                    <div className={styles.textSity4}>
                    <p>Москва</p>
                    <p>Уфа</p>
                    <p>Санкт-Петербург</p>
                    <p>Сургут</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carts;