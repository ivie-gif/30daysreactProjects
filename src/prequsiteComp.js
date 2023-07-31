import React from 'react'

const SiteCourse = ({allCourse: [tech]}) => {
    return (
        <div>
            <h4>{tech}</h4>
        </div>
    )
}

export const SiteCourseListing = ({courseLists}) => {
    console.log(courseLists, '666332')
const siteListing = courseLists.map((allCourse) => (<SiteCourse allCourse={allCourse}/>))
return(<div>{siteListing}</div>)
}