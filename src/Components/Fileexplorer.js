import { useState } from "react";
const Fileexplorer = ({ list }) => {
    // render list of objects    
    const [isExpanded, setIsExpanded] = useState({});
    return (
        <div className="container">
            {list.map((node) => (
                <div key={node.id}>
                    {node?.isFolder && <span onClick={() => (setIsExpanded(prev =>
                        ({ ...prev, [node.name]: !prev[node.name] })
                    ))}>
                        {isExpanded?.[node.name] ? "-" : "+" }</span>}
                    <span>{node.name}</span>
                    {isExpanded?.[node.name] && node?.children && <Fileexplorer list={node.children} />}
                </div>
            )
            )}
        </div>
    )

}
export default Fileexplorer;

