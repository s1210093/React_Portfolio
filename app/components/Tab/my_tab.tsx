import {
    createContext,
    useMemo,
    useState,
    useContext,
} from "react";
import React from 'react';
//import type {FC, ReactNode, ReactElement} from  'react';

import classNames from "classNames";
import styles from "./Tab.module.css";

type TabKey= string | number;

type TabLabel = string | number | React.ReactElement;

type TabProps = {
    defaultKey: TabKey;
    children: React.ReactElement<TabItemProps> | React.ReactElement<TabItemProps>[];
    className?:  string;
}

type TabHeader={
    tabKey: TabKey;
    label: TabLabel;
}

type TabContextState = {
    activeKey: TabKey;
}

const TabContext = createContext<TabContextState>({
    activeKey:"",
});

export const Tab: React.FC<TabProps> = ({ defaultKey, children, className }) =>{
    const [activeKey, setActiveKey] = useState(defaultKey);
    const headers = useMemo<TabHeader[]>(() =>{
        const headerArray: TabHeader[] = [];
        if (Array.isArray(children)) {
            children.forEach((c) => {
            if(c.type !== TabItem) throw Error("TabItemを利用してください");
                headerArray.push({
                    tabKey: c.props.tabKey,
                    label: c.props.label,
                });
            });
            } else if(children.type === TabItem){
                headerArray.push({
                    tabKey: children.props.tabKey,
                    label: children.props.label,
                });
            }　else　{
                throw Error("TabItemを利用してください");
            }
            return headerArray;
        }, [children]);
    return (
        <TabContext.Provider value={{ activeKey }}>
            <ul className={classNames(styles.header, className)}>
                {headers.map(({tabKey, label}) =>{
                    return(
                        <li className={styles.column} key={tabKey}>
                            <button
                            className={classNames(
                                styles.button,
                                tabKey === activeKey && styles.active
                            )} 
                            onClick={() => setActiveKey(tabKey)}
                            >
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ul>
            {children}
            </TabContext.Provider>
    );
};

type TabItemProps = {
    tabKey: TabKey;
    label: TabLabel;
    children: React.ReactNode;
    className?: String;
};

export const TabItem: React.FC<TabItemProps> = ({ tabKey, children, className }) => {
    const { activeKey } = useContext(TabContext);

    return activeKey === tabKey ? (
        <div className={classNames(styles.tabBody, className)}>{children}</div>
    ) : null;
};