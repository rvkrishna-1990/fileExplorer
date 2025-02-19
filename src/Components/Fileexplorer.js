import { useEffect, useState } from "react";
const Fileexplorer = ({ list }) => {
    // render list of objects    
    const [isExpanded, setIsExpanded] = useState({});
    const [data, setData] = useState(list)
    const addFolder = (parentId) => {
        const name = prompt("enter folder Name");
        const updateData = (list) => {
            return list.map((node) => {
                if (node.id === parentId) {
                    return {
                        ...node,
                        "children": [...node.children, { "id": "23", "name": name, "isFolder": true, "children": [] }
                        ]
                    }
                }
                if (node.children) {
                    return { ...node, children: updateData(node.children) }
                }
                return node;
            })
        }
        setData((prev) => updateData(prev));
    }
    return (
        <div className="container">
            {data.map((node) => (
                <div key={node.id}>
                    {node?.isFolder && <span onClick={() => (setIsExpanded(prev =>
                        ({ ...prev, [node.name]: !prev[node.name] })
                    ))}>
                        {isExpanded?.[node.name] ? "-" : "+"}</span>}
                    <span>{node.name}</span>
                    {node?.isFolder && <span onClick={() => addFolder(node.id)}> add </span>}
                    {isExpanded?.[node.name] && node?.children && <Fileexplorer list={node.children} />}
                </div>
            )
            )}
        </div>
    )

}
export default Fileexplorer;

