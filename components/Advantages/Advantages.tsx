import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import CheckSVG from "./Check.svg";


export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {

    
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckSVG/>
					<div className={styles.title}>{a.title}</div>
					<hr className={styles.vline}/>
					<div className={styles.descr}>{a.description}</div>
				</div>
			))}
		</>
	);
};
