import {useState} from "react";
import { FaInfo } from "react-icons/fa";

import Button from "~/components/Button/my_button";
import { Tab, TabItem } from "./my_tab";

import styles from "./Tab.module.css";

export default {
    title: "Tab",
};

export const Sample = () =>{
    return (
        <Tab defaultKey="item1">
            <TabItem tabKey="item1" label="アイテム1">
                アイテム１のタブ
            </TabItem>
            <TabItem tabKey="item2" label="アイテム2">
                アイテム２のタブ
            </TabItem>
        </Tab>
    );
};

export const Number = () => {
        const [array, setArray] = useState([1,2,3,4,5]);
    
    
        const addArray = () => {
            setArray((prev) =>{
        if (prev.length >= 8) return prev;
        return [...prev, prev.length + 1];
    });
};
return(
    <div style={{ width: "500px" }}>
        <p>タブを動的に追加するパターン(8まで追加可能) </p>
    <Tab defaultKey={1}>
        {array.map((num) => {
            return (
                <TabItem tabKey={num} label={num} key={num}>
                    {num}
                </TabItem>
            )
        })}
        </Tab>
        <Button onClick={addArray}>+ add</Button>
        </div>
);
};

export const Icon = () => {
    const headerLabel = (label:string) => {
        return (
            <div className={styles.hasIcon}>
                <FaInfo />
                {label}
            </div>
        );
    };
    return (
        <div style={{ width: "500px" }}>
            <Tab defaultKey="1st">
                <TabItem label={headerLabel("1st")}>
                    1st content
                </TabItem>
                <TabItem label={headerLabel("2nd")}>
                    2nd content
                </TabItem>
                <TabItem label={headerLabel("3rd")}>
                    3rd content
                </TabItem>
            </Tab>
        </div>
    );
};

export const Gallery = () => {
    const headerLabel = (label: string) =>{
        return (
            <div className={styles.hasIcon}>
                <FaInfo/>
                {label}
            </div>
        );
    };
    return (
        <div style={{ width: "500px"}}>
            <Tab defaultKey="React">
                <TabItem tabKey="React" label="React">
                    This is initial tab.
                </TabItem>
                <TabItem tabKey="Useful" label="Useful">
                    2nd content
                </TabItem>
                <TabItem tabKey="Components" label={headerLabel("Components")}>
                    3rd content
                </TabItem>
            </Tab>
        </div>
    );
};