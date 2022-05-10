import styled from "styled-components/macro";

export const SiteLoaderWrapper = styled.div`
	&.site-loader {
		background-color: #ffffff;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 9999;
		text-align: center;
	}
	&.site-loader .preloader-content {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		width: 70px;
	}
`;
