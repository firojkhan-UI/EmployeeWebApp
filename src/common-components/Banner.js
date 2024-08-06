import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`

const BannerComponent = ({isOpenFormData}) => <BannerWrapper>
<button onClick={isOpenFormData}>Create Employee</button>
<button>Update Employee</button>
</BannerWrapper>
export default BannerComponent