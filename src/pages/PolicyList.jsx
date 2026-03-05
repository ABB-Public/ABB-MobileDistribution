import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AbbHeader from "../componets/AbbHeader";


export default function PolicyList() {
    const [apps, setApps] = useState({});

    useEffect(() => {
        fetch("/policies/apps.json")
            .then(response => response.json())
            .then(data => setApps(data))
            .catch(error => console.error("Error fetching apps:", error));
    }, []);

    return (
        <>
            <AbbHeader appName="All Applications" />

            <div className="mid" style={{ padding: "40px" }}>
                <p>Select an application to view its privacy documents:</p>

                <ul>
                    {Object.entries(apps).map(([appName, files]) => (
                        <li key={appName} style={{ marginBottom: "20px" }}>
                            <h2>
                                <Link to={`/policies/${appName}/index.md`}>
                                    {appName}
                                </Link>
                            </h2>
                        </li>
                    ))}
                </ul>

            </div>


        </>
    );

}

