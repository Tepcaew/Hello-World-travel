import styles from './Guides.module.css'

const Guide = ({ name, image, job, description }) => {
    return (
        <div className={styles.guideCard}>
            <img
                className={styles.guideImage}
                src={`http://localhost:3077/${image}`}
                alt=""
            />
            <div className={styles.contGid}>
                <div className={styles.bodyGid}>
                    <div className={styles.infoGid}>
                        <div className={styles.infoGidCart}>
                            <p className={styles.nameGid}>{name}</p>
                            <p className={styles.author}>{job}</p>
                            <p className={styles.organiz}>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guide;