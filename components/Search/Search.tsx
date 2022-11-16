import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { useState, KeyboardEvent } from "react";
import GlassIcon from "./Glass.svg";
import { useRouter } from "next/router";

export const Search = ({className, ...props}: SearchProps): JSX.Element => {
   
    const [search, setSearch] = useState<string>('');
    const router = useRouter();


    const searching = () => {
        router.push({
            pathname: "/search",
            query: {
                q: search
            }
        });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            searching();
        }
    };

    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input 
            className={styles.input}
            placeholder="Поиск..."
            value={search}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearch(e.target.value)}/> 
            
            <Button 
            appearence="primary"
            className={styles.button}
            onClick={searching}>
                <GlassIcon/>
            </Button>
        </div>
    );



};