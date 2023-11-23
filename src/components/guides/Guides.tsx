import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuide } from "../../features/guideSlice";
import styles from './Guides.module.css'
import Guide from "./Guide";

const Guides = () => {
    const dispatch = useDispatch();
    const guides = useSelector((state) => state.guide.guide);
    useEffect(() => {
      dispatch(getGuide());
    }, [dispatch]);
console.log(guides)
    return (
        <div className={styles.guidesContainer}>
            {guides.map((guide) => {

                return (
                    <Guide
                        key={guide._id}
                        id={guide._id}
                        name={guide.name}
                        image={guide.image}
                        job={guide.job}
                        description={guide.description}
                     />
                )
            })}
        </div>
    )
}

export default Guides;