import { Suspense } from "react";
import { Dna } from 'react-loader-spinner'
import * as SC from "./SharedLayoutStyled"
import { Outlet } from "react-router-dom";
import Header from "components/Header/Header";

const SharedLayout = (): JSX.Element => {
    return (<SC.StyledSharedLayout>
        <Header/>
        <Suspense fallback={
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        }>
            <Outlet/>
        </Suspense>
    </SC.StyledSharedLayout> );
}
 
export default SharedLayout;