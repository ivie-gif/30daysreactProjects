import React from 'react'

const FooterComp = ({footerList: [footerName, footerDate]}) => {
    return (
        <h5 style={{margin: 'auto'}}>{footerName} {footerDate}</h5>
    )
}


export const Footer = ({footerLists}) => {
 const FooterItems = footerLists.map((footerList) => (< FooterComp footerList={footerList}/>))
 return (<div style={{display: 'flex'}}>{FooterItems}</div>)
}