import React from "react";
import TopBar from "./title";
import AppointmentTable from "./table";


const App = () => {
    return(
        <>
                    <TopBar />
                        <div className="container-lg my-5">
                                <AppointmentTable/> 
                        </div>
        </>
    )
};

export default App;