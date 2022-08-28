import styled from "styled-components";

export const stylesPositions = {
    Center: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    CenterApp: styled.div`
        width: 100%;
        height: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    SpaceBetween: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
};
