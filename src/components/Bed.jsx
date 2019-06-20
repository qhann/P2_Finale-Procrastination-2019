import React, { Component } from "react";

class Bed extends Component {
    render() {
        const { onClick, hasPlayer } = this.props;


        return (
            <div className={"bed"} onClick={onClick}>
<svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1296 1728" style={{enableBackground:"new 0 0 1296 1728;"}} xmlSpace="preserve">
<g className={"bed-path"}>
	<path class="st6" d="M1086.3,416.98c0,7,0,14,0,21c-0.79,0.23-1.62,0.38-2.37,0.71c-13.07,5.75-25.86,12.28-39.26,17.13
		c-21.21,7.67-42.78,14.37-64.27,21.22c-40.89,13.04-81.37,27.27-123.6,35.96c-22.37,4.61-44.68,9.12-67.33,12.07
		c-13.92,1.81-27.82,3.92-41.58,6.68c-21.31,4.28-40.15,14.63-58.7,25.43c-1.39,0.81-1.91,3.14-2.83,4.76c0,0-0.02,0.02-0.02,0.02
		c-2.73-2.79-5.42-5.62-8.2-8.36c-3.6-3.57-7.27-7.07-10.9-10.6c-8.97-12.12-17.05-24.7-21.85-39.19
		c-2.64-7.97-2.32-15.66,0.78-23.23c2.52-6.14,5.46-12.13,8.43-18.07c12.44-24.87,27.39-48.13,45.22-69.5
		c8.18-9.79,16.99-19.11,24.5-29.39c10.59-14.48,22.64-27.62,34.71-40.79c4.02-4.38,8.34-8.48,12.53-12.7
		c2.9-2.92,5.76-5.89,8.73-8.75c3.65-3.52,7.39-6.95,11.1-10.42c1.3-0.15,3.01,0.18,3.84-0.52c11.73-9.94,25.37-16.67,38.93-23.55
		c1.09,0.52,2.5,1.77,3.21,1.45c4.17-1.86,8.33-3.85,12.21-6.26c6.58-4.08,13.26-6.37,21.13-4.13c6.96,1.98,14.07,3.46,21.13,5.06
		c7.49,1.7,15.01,3.3,22.51,4.94c-3.4,0-6.8,0-10.2,0c-0.29,0.52-0.58,1.04-0.87,1.55c0.77,0.33,1.52,0.81,2.32,0.95
		c2.6,0.43,5.28,0.49,7.79,1.18c1.4,0.38,3.28,1.54,3.58,2.7c0.27,1.04-1.17,2.69-2.12,3.85c-2.4,2.94-5.33,5.52-7.38,8.67
		c-6.7,10.29-13.16,20.74-19.58,31.21c-2.08,3.38-4.2,6.85-5.53,10.56c-6.15,17.13-13.17,33.98-16.11,52.15
		c-2.53,15.63-9.25,30.51-8.12,46.85c0.18,2.58-1.12,6.19-3.02,7.8c-3.84,3.25-8.3,6.17-12.99,7.95
		c-12.67,4.8-25.57,8.99-38.41,13.32c-22.01,7.42-44.04,14.76-66.06,22.1c-1.21,0.4-2.49,0.75-3.75,0.78
		c-2.82,0.06-5.73-0.57-8.44-0.07c-8.77,1.62-17.51,3.45-26.18,5.53c-7.54,1.81-15.09,3.72-22.41,6.24
		c-11.18,3.85-10.22,12.51-3.5,21.01c1.83,2.31,4.95,3.6,7.47,5.36c0.5-0.38,1-0.76,1.51-1.14c0-3.77,0.27-7.56-0.06-11.3
		c-0.53-5.9,3.14-9.14,7.55-11.05c4.17-1.81,8.94-2.26,13.48-3.18c12.19-2.48,24.52-4.42,36.55-7.5c9.61-2.46,18.79-6.55,28.3-9.44
		c16.64-5.05,33.64-9.04,50.04-14.77c12.88-4.5,25.16-10.79,37.53-16.65c4.34-2.06,8.03-5.03,7.95-10.95
		c-0.08-5.6,0.23-11.31,1.3-16.79c2.24-11.51,5.09-22.91,7.77-34.7c18.92-4.42,37.81-8.6,56.58-13.27
		c15.42-3.84,30.57-8.81,46.08-12.19c6.85-1.5,14.57-3.15,21.4,0.59c13.55,7.41,26.88,15.21,40.27,22.9
		c2.44,1.4,4.74,3.03,8.29,5.32c-5.38,1.44-9.18,2.51-13,3.48c-19.89,5.02-39.87,9.71-59.66,15.11
		c-18.05,4.92-35.95,10.44-53.82,15.98c-12.65,3.92-25.19,8.24-37.69,12.62c-1.42,0.5-2.3,2.51-3.44,3.83
		c1.62,0.17,3.4,0.86,4.83,0.41c6.97-2.16,13.77-4.89,20.78-6.92c14.8-4.29,29.73-8.1,44.53-12.41c17.19-5,34.18-10.7,51.45-15.36
		c14.2-3.83,28.91-5.86,42.97-10.09c8.4-2.53,14.72-1.78,19.85,5.02c0.11,1.89,0.66,3.58,1.63,4.96c0.84,1.19,2.08,2.16,3.28,3.04
		C1073.44,407.82,1079.88,412.39,1086.3,416.98z M757.44,465.78c0.22,0.29,0.44,0.59,0.66,0.88c1.35-0.78,3.16-1.23,3.96-2.38
		c4.35-6.25,9.55-12.21,12.43-19.12c9.76-23.42,18.76-47.17,27.85-70.86c6.43-16.76,12.96-33.46,22.65-48.68
		c10.6-16.64,21.4-33.16,32.01-49.79c2.12-3.33,3.88-6.92,5.58-10.49c0.37-0.79-0.21-2.03-0.52-4.22
		c-3.76,5.55-6.76,9.86-9.63,14.26c-12.59,19.29-25.71,38.26-37.53,58c-11.57,19.32-17.82,41.06-25.64,62.07
		c-5.96,16.01-12.27,31.91-19.11,47.56C766.69,450.94,761.73,458.21,757.44,465.78z M718.55,466.29
		c7.76-8.5,36.29-115.31,32.44-122.13C740.18,384.87,729.37,425.58,718.55,466.29z"/>
	<path class="st7" d="M1086.3,444.98c0,25,0,49.99,0,74.99c-2.17,0.75-4.37,1.41-6.51,2.25c-14.94,5.91-29.62,12.64-44.87,17.59
		c-21.74,7.05-43.92,12.75-65.88,19.11c-12.42,3.6-24.64,8.02-37.21,10.96c-25.63,5.99-51.73,9.32-77.98,10.98
		c-18.54,1.17-37.15,1.25-55.71,2.21c-6.05,0.31-12.23,1.21-18.01,2.97c-10.94,3.33-21.55,7.69-32.44,11.19
		c-7.24,2.32-14.75,3.78-22.06,5.92c-1.17,0.34-1.89,2.23-2.81,3.41c1.32,0.38,2.81,1.36,3.94,1.05
		c14.34-3.98,28.63-8.13,42.92-12.28c7.14-2.07,14.16-5.57,21.41-6.1c19.52-1.42,39.13-1.55,58.7-2.29
		c6.62-0.25,13.27-0.5,19.83-1.3c10.82-1.32,21.63-2.78,32.35-4.73c14.29-2.59,28.65-5.07,42.68-8.75
		c17.95-4.71,35.59-10.63,53.39-15.93c20.64-6.15,41.43-11.82,61.91-18.47c9.1-2.95,17.58-7.79,26.35-11.77c0,22,0,43.99,0,65.99
		c-2.95-0.28-6-1.18-8.84-0.74c-14.52,2.26-29.05,4.58-43.46,7.45c-14.59,2.9-29.16,6.06-43.54,9.84
		c-20.19,5.31-40.24,11.17-60.28,17.06c-15.15,4.45-30.49,7.5-46.27,8.46c-8.07,0.49-16.09,1.77-24.14,2.62
		c-10.85,1.14-21.69,2.5-32.57,3.23c-10.6,0.71-21.32,0-31.84,1.26c-13.26,1.58-26.36,4.48-39.5,6.95
		c-1.16,0.22-2.14,1.43-3.21,2.18c0.15,0.41,0.3,0.83,0.45,1.24c2.7,0,5.49,0.45,8.08-0.07c16.59-3.36,33.21-5.93,50.26-5.59
		c10.94,0.22,21.94-0.22,32.84-1.16c13.16-1.13,26.26-2.98,39.35-4.76c12.27-1.67,24.71-2.77,36.7-5.66
		c27.84-6.7,54.57-17.5,83.06-22c13.84-2.18,27.36-6.32,41.17-8.77c13.81-2.46,27.41-6.89,41.74-5.53c0,14,0,28,0,41.99
		c-8.67,1.17-17.36,2.25-26.02,3.53c-14.26,2.11-28.11,6.4-42.56,7.67c-8.53,0.75-17.23,1.72-25.4,4.16
		c-15.54,4.63-30.75,10.38-46.09,15.69c-1.56,0.54-3.02,1.43-4.6,1.87c-8.13,2.26-16.2,4.83-24.45,6.54
		c-16.49,3.44-33.04,6.59-49.63,9.46c-9.43,1.63-18.97,2.77-28.51,3.59c-9.85,0.85-19.76,1.49-29.63,1.35
		c-6.21-0.09-12.38-2.45-18.59-2.58c-5.18-0.1-8.51-1.84-10.88-6.16c-4.12-7.53-10.73-11.49-18.65-14.43
		c-3.88-1.44-7.07-5.24-10.03-8.46c-3-3.28-5.37-7.15-7.95-10.8c-4.29-6.07-8.97-11.93-12.7-18.33c-4.49-7.72-8.08-15.96-12.3-23.84
		c-0.6-1.13-2.59-1.51-3.94-2.24c-3.01-5.34-6.01-10.69-9.02-16.03c-2.15-7.01-3.5-14.3-9.77-19.38c-3.42-2.77-6.18-6.37-9.24-9.59
		c0,0,0.02-0.02,0.02-0.02c4.13-1.64,8.45-2.9,12.35-4.97c17.06-9.08,34.34-17.83,53.6-20.92c23.98-3.85,48.18-6.26,72.12-10.3
		c19.72-3.33,39.51-7,58.71-12.49c39.24-11.22,78.14-23.64,117.1-35.83c24.74-7.74,49.29-16.05,72.6-27.62
		C1077.09,447.71,1081.8,446.56,1086.3,444.98z"/>
	<path class="st8" d="M1086.3,657.95c0,50.66,0,101.32,0,151.98c-0.76,0.58-1.46,1.57-2.28,1.67c-4.37,0.57-8.76,1.05-13.16,1.3
		c-4.93,0.27-9.7-0.73-14.85,0.74c-5.41,1.54-11.37-0.76-17.33,1.04c-4.73,1.43-9.98-0.64-15.35,0.95
		c-5.76,1.71-12.25,1.06-18.42,1.27c-1.95,0.07-3.91-0.46-5.88-0.61c-1.13-0.09-2.28-0.04-3.4,0.07
		c-8.59,0.84-17.18,1.72-25.77,2.58c-0.49,0.05-1-0.04-1.5-0.02c-3.71,0.18-7.43,0.36-11.14,0.57c-1.81,0.1-3.62,0.38-5.43,0.42
		c-6.98,0.15-13.97,0.07-20.93,0.4c-6.84,0.33-13.67,1.03-20.5,1.64c-2.46,0.22-4.89,0.84-7.35,0.9c-6.24,0.16-12.5-0.16-18.72,0.19
		c-14.53,0.81-29.04,2.14-43.57,2.77c-7.11,0.3-14.26-0.47-21.39-0.83c-3.3-0.17-6.6-0.41-9.88-0.8c-6.02-0.71-9.61,1.95-10.22,7.72
		c-0.63,0.82-1.72,1.59-1.82,2.47c-1.12,10.33-2,20.69-3.16,31.02c-0.28,2.53-0.55,6.08-2.19,7.23c-3.02,2.13-2.73,4.58-2.71,7.34
		c-0.92,0.01-1.84,0.03-2.76,0.04c-1.83-0.03-3.67-0.17-5.49-0.06c-5.08,0.31-8.33-1.48-8.94-6.98
		c-1.55-13.77-4.29-27.49-4.62-41.28c-0.92-39.57-0.89-79.16-1.2-118.74c-0.08-10.99-0.02-21.98-0.02-32.97
		c5.09,1.95,9.79,4.48,11.88,9.89c1.66,4.3,5.11,5.78,9.12,6.83c20.55,5.37,41.27,2.79,61.88,0.93c13.68-1.24,27.35-3.2,40.84-5.83
		c14.59-2.84,29.11-6.29,43.37-10.46c14.63-4.29,28.9-9.8,43.35-14.72c3.91-1.33,7.81-2.85,11.85-3.57
		c7.8-1.38,15.69-2.25,23.54-3.32c0.43-0.02,0.87-0.04,1.3-0.06c0.53-0.01,1.07-0.02,1.6-0.03c8.89-0.22,17.78-0.46,26.67-0.66
		C1056.59,658.61,1071.44,658.28,1086.3,657.95z"/>
	<path class="st9" d="M1086.3,416.98c-6.42-4.59-12.86-9.15-19.25-13.78c-1.2-0.87-2.44-1.84-3.28-3.04
		c-0.97-1.38-1.51-3.07-1.63-4.96c-5.12-6.8-11.45-7.55-19.85-5.02c-14.06,4.23-28.77,6.26-42.97,10.09
		c-17.27,4.66-34.27,10.36-51.45,15.36c-14.79,4.3-29.73,8.12-44.53,12.41c-7.01,2.03-13.81,4.76-20.78,6.92
		c-1.43,0.44-3.21-0.25-4.83-0.41c1.13-1.31,2.02-3.33,3.44-3.83c12.51-4.38,25.04-8.7,37.69-12.62
		c17.87-5.54,35.77-11.06,53.82-15.98c19.79-5.39,39.77-10.09,59.66-15.11c3.83-0.97,7.63-2.04,13-3.48
		c-3.55-2.29-5.86-3.92-8.29-5.32c-13.39-7.69-26.72-15.49-40.27-22.9c-6.83-3.74-14.55-2.08-21.4-0.59
		c-15.51,3.38-30.66,8.35-46.08,12.19c-18.77,4.68-37.66,8.86-56.58,13.27c-2.68,11.8-5.53,23.19-7.77,34.7
		c-1.07,5.48-1.38,11.19-1.3,16.79c0.08,5.92-3.6,8.9-7.95,10.95c-12.37,5.86-24.65,12.15-37.53,16.65
		c-16.39,5.73-33.39,9.72-50.04,14.77c-9.52,2.88-18.7,6.98-28.3,9.44c-12.04,3.08-24.36,5.02-36.55,7.5
		c-4.53,0.92-9.31,1.37-13.48,3.18c-4.41,1.91-8.08,5.15-7.55,11.05c0.33,3.74,0.06,7.53,0.06,11.3c-0.5,0.38-1,0.76-1.51,1.14
		c-2.53-1.76-5.65-3.05-7.47-5.36c-6.72-8.5-7.68-17.16,3.5-21.01c7.32-2.52,14.87-4.42,22.41-6.24c8.67-2.09,17.41-3.91,26.18-5.53
		c2.71-0.5,5.62,0.13,8.44,0.07c1.26-0.03,2.54-0.38,3.75-0.78c22.03-7.35,44.06-14.69,66.06-22.1
		c12.84-4.33,25.75-8.52,38.41-13.32c4.69-1.78,9.15-4.7,12.99-7.95c1.9-1.61,3.2-5.22,3.02-7.8c-1.13-16.34,5.59-31.22,8.12-46.85
		c2.95-18.18,9.96-35.02,16.11-52.15c1.33-3.71,3.46-7.17,5.53-10.56c6.42-10.47,12.88-20.92,19.58-31.21
		c2.05-3.15,4.98-5.73,7.38-8.67c0.95-1.16,2.39-2.81,2.12-3.85c-0.3-1.16-2.18-2.32-3.58-2.7c-2.52-0.69-5.2-0.75-7.79-1.18
		c-0.8-0.13-1.55-0.62-2.32-0.95c0.29-0.52,0.58-1.04,0.87-1.55c3.4,0,6.8,0,10.2,0c6.16,0.85,10.22,4.5,12.98,9.84
		c-3.27,2.97-6.66,5.82-9.77,8.95c-3.27,3.29-3.01,6.04,0.65,9.57c8.38,8.06,18.52,13.21,28.09,19.45
		c27.13,17.71,57.56,29.74,83.42,49.68c8.95,6.9,20.37,10.48,30,16.62c9.3,5.93,17.75,13.21,26.57,19.89
		C1086.3,406.98,1086.3,411.98,1086.3,416.98z M939.31,325.33c-2.7-0.38-4.83-1.21-6.73-0.85c-6.49,1.23-12.96,2.67-19.33,4.42
		c-7.44,2.05-14.77,4.52-22.15,6.8c-0.41-0.31-0.83-0.62-1.24-0.93c1.28-1.65,2.22-4.15,3.89-4.81c7.54-2.94,15.26-5.44,22.97-7.92
		c2.98-0.96,6.12-1.41,9.18-2.14c2.85-0.68,5.68-1.41,7.39-1.84c-6.47-6.04-13.19-11.89-19.37-18.28c-2.94-3.03-4.49-3.24-6.74,0.36
		c-4.29,6.89-8.74,13.68-13.23,20.45c-8.95,13.5-12.25,29.26-17.67,44.15c-1.23,3.38-1.46,7.12-2.12,10.56
		c35.68-9.62,70.47-18.99,105.34-28.39c-0.3-0.33-0.66-0.9-1.17-1.27c-9.4-6.75-18.91-13.35-28.2-20.25
		C946,322.32,942.33,320.92,939.31,325.33z"/>
	<path class="st10" d="M1015.07,659.62c-0.53,0.01-1.07,0.02-1.6,0.04c-0.43,0.02-0.87,0.04-1.3,0.06
		c-7.85,1.08-15.74,1.95-23.54,3.32c-4.03,0.71-7.94,2.24-11.85,3.57c-14.45,4.92-28.72,10.44-43.35,14.72
		c-14.26,4.18-28.79,7.62-43.37,10.46c-13.48,2.62-27.15,4.59-40.84,5.83c-20.61,1.86-41.33,4.45-61.88-0.93
		c-4.01-1.05-7.46-2.53-9.12-6.83c-2.09-5.41-6.79-7.94-11.88-9.89c-1.66-0.65-3.32-1.31-4.98-1.96
		c-17.33-11.2-27.02-28.37-36.04-46.07c-1.65-3.67-3.31-7.33-4.96-11c-0.34-0.66-0.68-1.32-1.02-1.98
		c-0.33-0.67-0.66-1.34-0.99-2.01c-0.31-0.35-0.63-0.7-0.94-1.05c-1.01-2.98-2.02-5.96-3.03-8.95c1.35,0.73,3.34,1.12,3.94,2.24
		c4.22,7.88,7.81,16.12,12.3,23.84c3.73,6.4,8.4,12.26,12.7,18.33c2.58,3.65,4.95,7.53,7.95,10.8c2.96,3.23,6.16,7.02,10.03,8.46
		c7.91,2.95,14.53,6.9,18.65,14.43c2.36,4.32,5.7,6.06,10.88,6.16c6.21,0.12,12.39,2.49,18.59,2.58c9.87,0.14,19.78-0.5,29.63-1.35
		c9.54-0.82,19.08-1.96,28.51-3.59c16.59-2.87,33.14-6.03,49.63-9.46c8.25-1.72,16.32-4.28,24.45-6.54c1.58-0.44,3.04-1.33,4.6-1.87
		c15.34-5.31,30.55-11.05,46.09-15.69c8.16-2.43,16.86-3.41,25.4-4.16c14.45-1.27,28.3-5.56,42.56-7.67
		c8.66-1.28,17.34-2.36,26.02-3.53c0,2.33,0,4.67,0,7c-5.74,0.67-11.53,1.09-17.22,2.05c-17.59,2.95-35.15,6.1-52.71,9.24
		C1015.87,658.33,1015.5,659.15,1015.07,659.62z"/>
	<path class="st11" d="M799.23,831.9c0.6-5.77,4.2-8.43,10.22-7.72c3.28,0.39,6.58,0.63,9.88,0.8c7.13,0.36,14.28,1.14,21.39,0.83
		c14.54-0.62,29.04-1.96,43.57-2.77c6.22-0.35,12.48-0.03,18.72-0.19c2.45-0.06,4.89-0.68,7.35-0.9c6.83-0.6,13.65-1.31,20.5-1.64
		c6.97-0.34,13.96-0.25,20.93-0.4c1.81-0.04,3.62-0.32,5.43-0.42c3.71-0.21,7.42-0.39,11.14-0.57c0.5-0.02,1,0.06,1.5,0.02
		c8.59-0.86,17.18-1.73,25.77-2.58c1.13-0.11,2.28-0.15,3.4-0.07c1.96,0.15,3.93,0.67,5.88,0.61c6.17-0.21,12.66,0.44,18.42-1.27
		c5.37-1.59,10.62,0.48,15.35-0.95c5.96-1.8,11.92,0.5,17.33-1.04c5.15-1.46,9.92-0.46,14.85-0.74c4.4-0.24,8.79-0.73,13.16-1.3
		c0.82-0.11,1.52-1.09,2.28-1.67c0,3,0,6,0,9c-15.29,0.76-30.58,1.44-45.86,2.29c-20.93,1.17-41.86,2.46-62.78,3.71
		c-25.58,1.53-51.15,3.08-76.73,4.59c-19.6,1.16-39.2,2.26-58.8,3.39c-3.49,0.2-6.97,0.54-10.46,0.66c-3.5,0.13-7.5,1.69-9.56-2.96
		c-0.1-0.22-0.53-0.43-0.8-0.43c-5.89-0.02-11.78-0.02-17.93-0.02c0,8.85,0.56,17.68-0.17,26.4c-0.61,7.2-2.16,14.45-4.38,21.33
		c-1.94,6-7.08,8.87-13.54,8.85c-0.69-1.21-1.37-2.42-1.88-3.33c1.33-1.41,2.28-2.41,3.22-3.42c0.92-0.01,1.84-0.03,2.75-0.04
		c5.29-1.26,6.33-6.05,6.79-10.01C797.6,857.32,798.26,844.59,799.23,831.9z"/>
	<path class="st12" d="M1086.3,444.98c-4.49,1.59-9.21,2.74-13.44,4.84c-23.31,11.57-47.86,19.88-72.6,27.62
		c-38.96,12.19-77.86,24.6-117.1,35.83c-19.2,5.49-38.99,9.16-58.71,12.49c-23.94,4.04-48.15,6.45-72.12,10.3
		c-19.26,3.09-36.54,11.84-53.6,20.92c-3.9,2.07-8.22,3.34-12.35,4.97c0.92-1.62,1.44-3.95,2.83-4.76
		c18.55-10.8,37.4-21.15,58.7-25.43c13.75-2.76,27.66-4.87,41.58-6.68c22.65-2.95,44.96-7.46,67.33-12.07
		c42.23-8.7,82.71-22.93,123.6-35.96c21.5-6.85,43.06-13.55,64.27-21.22c13.4-4.85,26.19-11.38,39.26-17.13
		c0.75-0.33,1.58-0.48,2.37-0.71C1086.3,440.31,1086.3,442.64,1086.3,444.98z"/>
	<path class="st12" d="M1086.3,525.97c-8.76,3.98-17.25,8.82-26.35,11.77c-20.48,6.65-41.27,12.32-61.91,18.47
		c-17.8,5.31-35.44,11.22-53.39,15.93c-14.03,3.68-28.39,6.16-42.68,8.75c-10.72,1.95-21.53,3.41-32.35,4.73
		c-6.57,0.8-13.21,1.05-19.83,1.3c-19.57,0.74-39.18,0.87-58.7,2.29c-7.24,0.53-14.26,4.03-21.41,6.1
		c-14.29,4.15-28.58,8.3-42.92,12.28c-1.13,0.31-2.62-0.67-3.94-1.05c0.93-1.18,1.64-3.07,2.81-3.41c7.3-2.14,14.82-3.59,22.06-5.92
		c10.89-3.5,21.51-7.86,32.44-11.19c5.78-1.76,11.96-2.65,18.01-2.97c18.56-0.96,37.16-1.04,55.71-2.21
		c26.25-1.65,52.35-4.98,77.98-10.98c12.57-2.94,24.79-7.36,37.21-10.96c21.96-6.37,44.14-12.07,65.88-19.11
		c15.25-4.95,29.93-11.68,44.87-17.59c2.13-0.84,4.34-1.51,6.51-2.25C1086.3,521.97,1086.3,523.97,1086.3,525.97z"/>
	<path class="st12" d="M1086.3,597.96c-14.33-1.35-27.93,3.08-41.74,5.53c-13.81,2.46-27.33,6.59-41.17,8.77
		c-28.49,4.5-55.22,15.3-83.06,22c-11.99,2.89-24.43,3.99-36.7,5.66c-13.09,1.78-26.2,3.62-39.35,4.76
		c-10.9,0.94-21.9,1.38-32.84,1.16c-17.05-0.34-33.67,2.23-50.26,5.59c-2.59,0.52-5.38,0.07-8.08,0.07
		c-0.15-0.41-0.3-0.83-0.45-1.24c1.07-0.75,2.04-1.96,3.21-2.18c13.14-2.47,26.24-5.37,39.5-6.95c10.51-1.26,21.24-0.55,31.84-1.26
		c10.88-0.73,21.72-2.08,32.57-3.23c8.05-0.85,16.07-2.12,24.14-2.62c15.79-0.96,31.13-4.01,46.27-8.46
		c20.03-5.89,40.09-11.74,60.28-17.06c14.38-3.78,28.95-6.94,43.54-9.84c14.41-2.87,28.93-5.18,43.46-7.45
		c2.84-0.44,5.89,0.46,8.84,0.74C1086.3,593.96,1086.3,595.96,1086.3,597.96z"/>
	<path class="st13" d="M1015.07,659.62c0.43-0.48,0.8-1.29,1.3-1.38c17.56-3.14,35.12-6.29,52.71-9.24
		c5.7-0.96,11.48-1.38,17.22-2.05c0,3.67,0,7.33,0,11c-14.85,0.34-29.71,0.66-44.56,1.01
		C1032.84,659.17,1023.95,659.4,1015.07,659.62z"/>
	<path class="st13" d="M714.37,606.96c1.01,2.98,2.02,5.96,3.03,8.95l-0.09,0.08c-2.72-2.89-5.31-5.91-8.18-8.64
		c-11.19-10.65-22.52-21.15-33.69-31.83c-6.59-6.3-12.85-12.94-19.44-19.23c-9.25-8.83-18.67-17.48-28-26.22
		c-6.79-6.36-13.38-12.96-20.35-19.11c-23.52-20.73-47.1-41.38-70.83-61.87c-4.4-3.8-9.57-6.71-14.38-10.04
		c-1.6-1.1-3.39-2.01-4.77-3.34c-11.27-10.84-22.39-21.85-33.71-32.63c-25.76-24.53-51.49-49.09-77.5-73.36
		c-7.24-6.75-15.41-12.5-23.12-18.75c-8.11-6.57-16.3-13.05-24.22-19.85c-4.79-4.11-9.13-8.73-13.68-13.12
		c-0.74-1.24-1.28-2.67-2.27-3.67c-4.96-5.07-9.88-10.21-15.1-15c-11.08-10.19-22.35-20.18-33.53-30.25c0.27-3.61,0.2-7.3,0.9-10.83
		c0.82-4.11,2.08-8.18,3.59-12.09c1.01-2.6,3.17-3.74,6.02-2.13c6.75,3.8,13.7,7.29,20.23,11.43c7.21,4.58,14.04,9.75,21.03,14.66
		c1.16,1.56,2.06,3.43,3.51,4.63c5.11,4.22,10.46,8.14,15.63,12.29c9.56,7.68,19.48,14.99,28.48,23.28
		c11.84,10.91,22.76,22.81,34.43,33.91c3.92,3.73,8.8,6.5,13.46,9.33c1.1,0.67,3.12-0.16,4.72-0.3c-0.69-1.4-1.03-3.26-2.15-4.12
		c-3.52-2.75-7.72-4.71-10.95-7.72c-10.91-10.18-21.19-21.06-32.33-30.97c-12.25-10.9-25.1-21.12-37.86-31.43
		c-4.58-3.71-9.65-6.82-14.49-10.2c-1-1.06-1.92-2.22-3.02-3.15c-6.19-5.23-12.44-10.4-18.66-15.59c7.77,0.97,15.51,2.41,23.3,2.82
		c13.21,0.7,26.45,0.71,39.68,1.11c5.14,0.15,6.05-1.17,4.16-6.3c1.27-0.73,3.1-1.13,3.66-2.2c2.63-4.98,4.38-1.94,6.47,0.39
		c1.9,2.13,4,4.08,6.01,6.11c0.32,0.37,0.65,0.74,0.97,1.12c0.69,0.96,1.37,1.91,2.06,2.87c1.98,2.4,3.96,4.8,5.94,7.19
		c2.04,2.98,3.89,6.12,6.15,8.92c7.1,8.75,14.24,17.46,21.59,25.99c3.44,3.99,7.57,7.37,11.1,11.28c2.91,3.22,5.76,4.76,9.99,2.38
		c1.02-0.58,2.83-0.13,4.16,0.26c5.01,1.47,10.11,4.35,14.12-1.91c0.43-0.67,1.76-0.93,2.72-1.05c11.31-1.39,22.59-3.27,33.95-3.93
		c15.08-0.88,30.26-0.19,45.31-1.31c13.8-1.03,27.58-3.12,41.21-5.57c15.46-2.77,29.26-10.26,43.65-16.24
		c14.08-5.85,26.1-14.92,39.64-21.44c1.01-0.49,1.64-1.77,2.45-2.69c-6.68-5.67-12.9-10.97-19.91-16.92
		c-0.02-0.23-0.12-1.7-0.22-3.17c0.32-0.49,0.63-0.98,0.95-1.47c2.46,1.23,4.92,3.49,7.38,3.51c10.93,0.08,21.87-0.23,32.78-0.93
		c6.68-0.42,13.31-1.79,19.96-2.74c0.68,0.02,1.37,0.03,2.05,0.05c3.98,0.28,7.97,0.56,11.95,0.84c6.87,3.25,14.56,5.43,20.45,9.95
		c13.61,10.46,26.27,22.15,39.5,33.11c2.74,2.27,5.49,5.74,10.02,3.71c5.24,4.12,10.67,8.03,15.62,12.46
		c1.58,1.42,1.92,4.23,2.83,6.4c-1.53,1.4-3.06,2.81-4.59,4.21c-13.56,6.88-27.2,13.61-38.93,23.55c-0.83,0.7-2.54,0.37-3.84,0.52
		c-2.06,0.94-4.43,1.49-6.13,2.87c-8.39,6.79-16.63,13.75-24.86,20.73c-7.46,6.33-15.85,11.91-22.04,19.32
		c-16.62,19.88-36.36,36.79-51.95,57.79c-11.97,16.12-24.34,31.92-34.84,49.02c-5.35,8.72-9.47,18.21-14.14,27.35
		c-6.48-5.42-12.66-11.25-19.49-16.18c-27.47-19.87-53.25-41.7-77.58-65.29c-3.32-3.22-6.96-6.15-10.67-8.91
		c-7.31-5.45-15.07-10.33-22.11-16.1c-17.17-14.07-34-28.56-51.1-42.72c-1.97-1.63-4.8-2.23-7.24-3.3c-0.33,0.55-0.65,1.1-0.98,1.64
		c0.58,0.87,1.01,1.9,1.76,2.58c4.2,3.76,8.41,7.5,12.73,11.12c14.59,12.25,28.42,25.62,44.05,36.37
		c19.85,13.66,36.41,30.87,54.61,46.28c13.27,11.24,26.56,22.47,40.06,33.44c8.71,7.07,17.81,13.66,26.74,20.46
		c-0.58,0.34-1.15,0.69-1.73,1.03c0.18,1.21-0.07,3.03,0.62,3.52c1.86,1.3,4.11,2.03,6.21,2.98c-1.53,3.48-3.34,6.87-4.5,10.48
		c-0.77,2.39-1.63,5.59-0.67,7.56c4.05,8.31,8.08,16.79,13.41,24.29c8.02,11.28,17.13,21.8,25.78,32.64
		c3.12,4.01,5.93,8.31,9.42,11.97c9.37,9.82,19.03,19.37,28.57,29.02C708.36,596.27,711.37,601.62,714.37,606.96z"/>
	<path class="st14" d="M345.43,278c4.54,4.39,8.89,9.01,13.68,13.12c7.92,6.79,16.11,13.27,24.22,19.85
		c7.71,6.25,15.88,12,23.12,18.75c26.01,24.27,51.74,48.83,77.5,73.36c11.32,10.79,22.44,21.79,33.71,32.63
		c1.38,1.33,3.17,2.24,4.77,3.34c0.97,1.47,1.7,3.21,2.96,4.37c6.82,6.31,13.75,12.51,20.69,18.68
		c20.46,18.18,40.99,36.28,61.38,54.54c7.14,6.4,13.87,13.25,20.91,19.77c5.97,5.52,12.29,10.66,18.13,16.31
		c9.54,9.23,18.82,18.74,28.21,28.12c12.75,12.74,25.51,25.46,38.24,38.23c2.21,2.21,4.26,4.58,6.38,6.88c1.99,2,3.99,4,5.98,5.99
		c9.02,17.7,18.7,34.88,36.04,46.07c-0.34,9.28-1.01,18.56-0.96,27.84c0.2,41.36,0.58,82.72,0.97,124.09
		c0.05,4.96,0.72,9.91,0.8,14.87c0.05,3.04-0.49,6.08-0.77,9.12c-0.5-2.87-0.93-5.76-1.5-8.62c-1.65-8.15-3.16-16.34-5.16-24.41
		c-0.59-2.38-2.24-4.77-4.02-6.54c-58.12-57.76-116.32-115.43-174.49-173.15c-64.2-63.69-128.34-127.44-192.64-191.04
		c-3.42-3.38-8.44-5.14-11.91-8.48c-6.57-6.34-12.54-13.31-18.8-19.98c-9.33-9.96-18.96-19.65-27.93-29.93
		c-5.99-6.86-10.72-14.8-16.62-21.75c-6.3-7.42-13.3-14.25-20.52-21.9c-1.36,7.46-2.09,13.88-3.76,20.05
		c-1.95,7.18-6.37,9.13-13.77,7.01c-2.8-20.69,0.24-41.48-1.03-62.2c0.61-25.99,1.23-51.97,1.84-77.96
		c0.13-5.66,0.25-11.33,0.37-16.99c2.57,2.04,5.17,4.04,7.69,6.14c17.89,14.87,35.71,29.81,53.66,44.61
		C336.81,272.1,341.21,274.94,345.43,278z"/>
	<path class="st15" d="M762.4,100.87c1.21,5.88,3.32,11.74,3.48,17.65c0.71,25.16,0.85,50.33,1.2,75.5
		c-3.34-1.72-6.69-3.44-10.03-5.16c0.37-9.19-2.54-11.23-10.97-12.06c-15.08-1.48-30.04,1.22-45.29-0.25
		c-16.91-1.63-34.22,0.81-51.35,1.48c-4.03-3.01-8.06-6.01-12.1-9.02c0.01-0.36,0.02-0.72,0.04-1.08
		c22.32-0.61,44.64-1.22,66.96-1.84c1.48,0.63,2.97,1.82,4.44,1.8c12.05-0.17,24.1-0.59,36.16-0.89c3.03-0.08,6.06-0.01,9.09-0.01
		c0.19-0.33,0.38-0.65,0.57-0.98c-1.73-0.95-3.46-1.91-5.2-2.86c1.92-0.38,3.85-0.76,5.89-1.16c0.37-6.23,0.72-12.15,1.02-17.32
		c-160.33,5.45-320.12,10.89-479.91,16.32c0-14.66,0-29.31,0-43.97c6.88-4.33,14.81-3.38,22.27-3.86
		c11.1-0.71,22.29-0.14,33.44-0.16c6.08-0.01,12.2,0.23,18.25-0.23c13.51-1.05,26.98-2.82,40.5-3.62c10.12-0.6,20.3,0.06,30.45-0.23
		c4.37-0.13,8.72-1.23,13.08-1.89c6.77-0.02,13.56,0.25,20.31-0.12c14.89-0.81,29.75-2.02,44.64-2.9c4.91-0.29,9.86,0.12,14.76-0.19
		c5.27-0.34,10.5-1.49,15.77-1.7c20.23-0.82,40.47-1.49,60.71-2.05c16.44-0.46,32.89-0.78,49.34-1c30.76-0.4,61.52-0.67,92.28-1.06
		c3.46-0.04,6.97-1.02,10.37-0.7c4.54,0.42,9.18,1.21,13.42,2.8c1.85,0.69,2.83,3.74,4.2,5.71c0.56-0.41,1.11-0.81,1.67-1.22
		C762.05,103.36,762.23,102.11,762.4,100.87z"/>
	<path class="st16" d="M762.4,100.87c-0.18,1.24-0.35,2.48-0.53,3.72c-0.56,0.41-1.11,0.81-1.67,1.22c-1.37-1.98-2.35-5.02-4.2-5.71
		c-4.24-1.58-8.88-2.38-13.42-2.8c-3.41-0.32-6.91,0.66-10.37,0.7c-30.76,0.39-61.52,0.65-92.28,1.06
		c-16.45,0.22-32.89,0.54-49.34,1c-20.24,0.56-40.48,1.23-60.71,2.05c-5.27,0.21-10.5,1.36-15.77,1.7
		c-4.91,0.32-9.86-0.1-14.76,0.19c-14.88,0.89-29.75,2.09-44.64,2.9c-6.75,0.37-13.54,0.1-20.31,0.12
		c-7.84-0.67-15.7-2.06-23.52-1.83c-12.87,0.38-25.71,2-38.58,2.73c-4.96,0.28-9.98-0.78-14.96-0.63
		c-4.26,0.13-8.48,1.23-12.75,1.65c-1.56,0.15-4.09,0.12-4.64-0.77c-2.21-3.6-5.25-1.91-8.02-1.84c-4.13,0.1-8.25,0.4-12.38,0.51
		c-3.91,0.1-7.83-0.09-11.73,0.15c-2.72,0.16-5.39,1.1-8.1,1.23c-10.4,0.49-20.85,0.48-29.97,6.76c-0.76,0.52-2.22,0.03-3.36,0.01
		c-0.09-1.08-0.18-2.16-0.28-3.24c0,0,0.09,0.14,0.09,0.14c0.38-0.36,0.75-0.71,1.13-1.07c3.73-4.64,8.74-7.41,14.49-7.73
		c17.58-0.98,35.17-1.74,52.77-2.12c24.95-0.54,49.9-0.62,74.85-1c12.81-0.2,25.63-0.52,38.43-1c12.91-0.48,25.8-1.46,38.71-1.81
		c21.74-0.59,43.58,0.25,65.19-1.62c16.25-1.41,32.35,0.3,48.48-0.62c10.27-0.58,20.5-2.23,30.78-2.5
		c19.45-0.52,38.92-0.49,58.38-0.52c18.31-0.03,36.63,0.08,54.94,0.27c6.45,0.07,12.61,1.28,16.93,6.82
		c0.38,0.67,0.75,1.34,1.13,2.01C762.43,101.01,762.4,100.87,762.4,100.87z"/>
	<path class="st17" d="M266.4,115c1.14,0.02,2.6,0.51,3.36-0.01c9.11-6.28,19.57-6.27,29.97-6.76c2.71-0.13,5.39-1.06,8.1-1.23
		c3.9-0.24,7.82-0.04,11.73-0.15c4.13-0.11,8.25-0.41,12.38-0.51c2.77-0.07,5.81-1.76,8.02,1.84c0.55,0.89,3.08,0.92,4.64,0.77
		c4.26-0.42,8.49-1.52,12.75-1.65c4.98-0.15,10,0.91,14.96,0.63c12.87-0.73,25.7-2.35,38.58-2.73c7.81-0.23,15.68,1.17,23.52,1.83
		c-4.36,0.66-8.7,1.77-13.08,1.89c-10.14,0.29-20.33-0.37-30.45,0.23c-13.53,0.8-26.99,2.57-40.5,3.62
		c-6.05,0.47-12.16,0.22-18.25,0.23c-11.15,0.02-22.33-0.55-33.44,0.16c-7.46,0.47-15.39-0.47-22.27,3.86
		c-5.58,3.4-4.63,9.35-4.82,14.33c-0.33,8.59,0.79,17.22,0.73,25.82c-0.1,15.28-0.62,30.56-0.97,45.84
		c-0.65,1.46-1.64,2.86-1.88,4.38c-0.55,3.5-0.73,7.06-1.07,10.6c-1.02-0.66-2.04-1.32-3.06-1.99c-0.33-26.28-0.66-52.57-0.99-78.85
		C265.03,129.77,265.71,122.39,266.4,115z"/>
	<path class="st18" d="M761.39,853.93c0.28-3.04,0.81-6.09,0.77-9.12c-0.08-4.96-0.75-9.91-0.8-14.87
		c-0.39-41.36-0.77-82.72-0.97-124.09c-0.05-9.28,0.62-18.56,0.96-27.84c1.66,0.65,3.32,1.31,4.98,1.96
		c0,10.99-0.07,21.98,0.02,32.97c0.3,39.58,0.28,79.17,1.2,118.74c0.32,13.79,3.07,27.52,4.62,41.28c0.62,5.5,3.86,7.29,8.94,6.98
		c1.82-0.11,3.66,0.03,5.49,0.06c-0.94,1.01-1.89,2.01-3.22,3.42c0.51,0.91,1.2,2.12,1.88,3.33c-12.92,0.45-16.88-2.45-20.27-14.94
		c-0.68-2.52-1.24-5.08-1.86-7.63c-0.19-0.77-0.38-1.55-0.58-2.32c-0.12-0.63-0.24-1.27-0.37-1.9c-0.19-1.05-0.39-2.1-0.58-3.15
		C761.54,855.85,761.47,854.89,761.39,853.93z"/>
	<path class="st19" d="M757.05,188.86c3.34,1.72,6.69,3.44,10.03,5.16c1.66,2,3.11,4.22,5,5.95c16.02,14.67,32.13,29.25,48.21,43.86
		c-4.53,2.03-7.29-1.45-10.02-3.71c-13.23-10.96-25.89-22.65-39.5-33.11c-5.89-4.53-13.58-6.71-20.45-9.95
		c-3.98-0.28-7.97-0.56-11.95-0.84c-0.68-0.02-1.37-0.03-2.05-0.05c-5.04,0.23-10.12,0.9-15.11,0.5c-2.42-0.19-4.68-2.39-7.01-3.69
		c0.88-0.32,1.75-0.82,2.66-0.93c10.65-1.31,21.29-2.67,31.96-3.75C751.52,188.02,754.31,188.65,757.05,188.86z"/>
	<path class="st20" d="M265.34,216.02c1.02,0.66,2.04,1.32,3.06,1.99c0,4.45-0.2,8.92,0.12,13.36c0.09,1.28,1.66,2.46,2.56,3.68
		c-0.61,25.99-1.23,51.97-1.84,77.96c-1.61,0.67-3.23,1.33-4.84,2c-0.2-5.61-0.67-11.22-0.52-16.82c0.23-8.97,1.22-17.92,1.25-26.88
		c0.05-15.45-0.44-30.9-0.58-46.36C264.52,221.96,265.06,218.99,265.34,216.02z"/>
	<path class="st19" d="M834.16,266.91c1.53-1.41,3.06-2.81,4.59-4.21c2.35-1.45,4.87-2.7,7.03-4.4c8.64-6.78,17.94-8.27,28.58-5.28
		c10.99,3.09,22.21,5.42,33.42,7.59c9.86,1.9,16.51,7.93,22.68,15.87c-1.24,0.53-2.19,0.94-3.13,1.34
		c-2.76-5.34-6.82-8.98-12.98-9.84c-7.5-1.64-15.02-3.23-22.51-4.94c-7.06-1.61-14.17-3.08-21.13-5.06
		c-7.87-2.24-14.55,0.05-21.13,4.13c-3.88,2.4-8.04,4.39-12.21,6.26C836.66,268.68,835.25,267.43,834.16,266.91z"/>
	<path class="st17" d="M264.4,314.99c1.61-0.67,3.23-1.33,4.84-2c1.27,20.72-1.77,41.51,1.03,62.2c-3.79-0.29-5.69-2.61-5.99-6.12
		c-0.43-4.93-0.81-9.9-0.75-14.84C263.69,341.15,264.09,328.07,264.4,314.99z"/>
	<path class="st21" d="M266.4,115c-0.68,7.39-1.36,14.78-2.04,22.16c-0.02-7.57-0.1-15.14,0.02-22.71c0.01-0.9,1.14-1.79,1.75-2.68
		C266.21,112.84,266.3,113.92,266.4,115z"/>
	<path class="st14" d="M761.61,856.82c0.19,1.05,0.38,2.1,0.58,3.15C762,858.92,761.8,857.87,761.61,856.82z"/>
	<path class="st15" d="M762.43,101.01c-0.38-0.67-0.75-1.34-1.13-2.01C761.67,99.66,762.05,100.33,762.43,101.01z"/>
	<path class="st14" d="M762.56,861.87c0.19,0.77,0.38,1.55,0.58,2.32C762.94,863.41,762.75,862.64,762.56,861.87z"/>
	<path class="st21" d="M267.34,110.83c-0.38,0.36-0.75,0.71-1.13,1.07C266.59,111.54,266.97,111.18,267.34,110.83z"/>
	<path class="st19" d="M667.36,549.94c-8.65-10.84-17.75-21.36-25.78-32.64c-5.33-7.5-9.36-15.98-13.41-24.29
		c-0.96-1.97-0.1-5.17,0.67-7.56c1.16-3.6,2.97-6.99,4.5-10.48c1.37-2.31,2.73-4.61,4.1-6.92c4.67-9.14,8.78-18.63,14.14-27.35
		c10.5-17.11,22.87-32.91,34.84-49.02c15.59-20.99,35.32-37.91,51.95-57.79c6.19-7.4,14.58-12.99,22.04-19.32
		c8.23-6.98,16.47-13.95,24.86-20.73c1.7-1.38,4.07-1.94,6.13-2.87c-3.7,3.47-7.44,6.9-11.1,10.42c-2.97,2.86-5.83,5.82-8.73,8.75
		c-4.19,4.22-8.52,8.32-12.53,12.7c-12.06,13.17-24.12,26.31-34.71,40.79c-7.51,10.27-16.33,19.59-24.5,29.39
		c-17.84,21.37-32.78,44.62-45.22,69.5c-2.97,5.94-5.92,11.93-8.43,18.07c-3.1,7.56-3.42,15.26-0.78,23.23
		c4.8,14.49,12.88,27.07,21.85,39.19c0.9,2.04,1.81,4.09,2.85,6.44C669.14,549.62,668.25,549.78,667.36,549.94z"/>
	<path class="st12" d="M757.44,465.78c4.28-7.57,9.25-14.85,12.71-22.78c6.83-15.65,13.14-31.55,19.11-47.56
		c7.83-21,14.07-42.75,25.64-62.07c11.83-19.74,24.95-38.71,37.53-58c2.87-4.4,5.87-8.71,9.63-14.26c0.31,2.19,0.9,3.43,0.52,4.22
		c-1.7,3.58-3.45,7.16-5.58,10.49c-10.61,16.64-21.41,33.15-32.01,49.79c-9.69,15.22-16.23,31.92-22.65,48.68
		c-9.09,23.7-18.09,47.44-27.85,70.86c-2.88,6.91-8.08,12.87-12.43,19.12c-0.8,1.15-2.61,1.61-3.96,2.38
		C757.88,466.37,757.66,466.08,757.44,465.78z"/>
	<path class="st12" d="M718.55,466.29c10.81-40.71,21.63-81.42,32.44-122.13C754.84,350.97,726.31,457.78,718.55,466.29z"/>
	<path class="st22" d="M667.36,549.94c0.89-0.16,1.77-0.32,2.74-0.5c-1.04-2.36-1.95-4.4-2.85-6.44c3.64,3.53,7.3,7.04,10.9,10.61
		c2.77,2.75,5.47,5.57,8.2,8.36c3.06,3.22,5.82,6.82,9.24,9.59c6.27,5.07,7.62,12.37,9.77,19.38c-9.54-9.66-19.2-19.2-28.57-29.02
		C673.3,558.25,670.48,553.95,667.36,549.94z"/>
	<path class="st23" d="M799.23,831.9c-0.97,12.69-1.64,25.42-3.09,38.06c-0.46,3.96-1.5,8.75-6.79,10.01
		c-0.02-2.76-0.31-5.21,2.71-7.34c1.64-1.15,1.91-4.7,2.19-7.23c1.16-10.33,2.04-20.69,3.16-31.02
		C797.51,833.49,798.61,832.72,799.23,831.9z"/>
	<path class="st13" d="M1012.16,659.72c0.43-0.02,0.87-0.04,1.3-0.06C1013.03,659.68,1012.6,659.7,1012.16,659.72z"/>
	<path class="st6" d="M939.31,325.33c3.01-4.41,6.68-3.01,10.83,0.07c9.29,6.9,18.79,13.5,28.2,20.25c0.51,0.36,0.87,0.94,1.17,1.27
		c-34.86,9.4-69.66,18.77-105.34,28.39c0.66-3.44,0.89-7.18,2.12-10.56c5.43-14.9,8.73-30.65,17.67-44.15
		c4.48-6.77,8.93-13.56,13.23-20.45c2.24-3.6,3.8-3.4,6.74-0.36c6.18,6.39,12.9,12.24,19.37,18.28c-1.7,0.42-4.54,1.16-7.39,1.84
		c-3.06,0.73-6.2,1.18-9.18,2.14c-7.71,2.48-15.43,4.98-22.97,7.92c-1.67,0.65-2.61,3.15-3.89,4.81c0.41,0.31,0.83,0.62,1.24,0.93
		c7.38-2.29,14.71-4.75,22.15-6.8c6.37-1.75,12.84-3.19,19.33-4.42C934.49,324.12,936.61,324.95,939.31,325.33z"/>
	<path class="st13" d="M725.32,631.94c-1.99-2-3.99-4-5.98-5.99c0.32-1.66,0.65-3.31,0.97-4.97c0,0,0.04-0.03,0.04-0.03
		C722.01,624.61,723.66,628.27,725.32,631.94z"/>
	<path class="st13" d="M718.34,616.95c0.33,0.67,0.66,1.34,0.99,2.01l0.01,0c-0.34-0.66-0.68-1.33-1.01-1.99L718.34,616.95z"/>
	<path class="st13" d="M719.34,618.96c0.34,0.66,0.68,1.32,1.02,1.98c0,0-0.04,0.03-0.04,0.03
		C719.99,620.3,719.66,619.63,719.34,618.96L719.34,618.96z"/>
	<path class="st13" d="M717.4,615.91c0.31,0.35,0.63,0.7,0.94,1.05c0,0-0.02,0.01-0.02,0.01c-0.34-0.33-0.68-0.65-1.02-0.98
		C717.31,615.99,717.4,615.91,717.4,615.91z"/>
	<path class="st22" d="M637.34,169.02c4.03,3.01,8.06,6.01,12.1,9.02c8.6,6.59,17.2,13.18,25.8,19.76c0.1,1.47,0.21,2.95,0.22,3.17
		c7,5.95,13.23,11.24,19.91,16.92c-0.81,0.92-1.44,2.2-2.45,2.69c-13.53,6.52-25.56,15.59-39.64,21.44
		c-14.39,5.98-28.19,13.46-43.65,16.24c-13.64,2.45-27.41,4.54-41.21,5.57c-15.05,1.12-30.23,0.43-45.31,1.31
		c-11.35,0.66-22.64,2.54-33.95,3.93c-0.95,0.12-2.29,0.38-2.72,1.05c-4.02,6.26-9.11,3.38-14.12,1.91
		c-1.33-0.39-3.13-0.84-4.16-0.26c-4.23,2.38-7.08,0.84-9.99-2.38c-3.53-3.92-7.66-7.3-11.1-11.28
		c-7.36-8.53-14.5-17.24-21.59-25.99c-2.27-2.8-4.11-5.93-6.15-8.92c0.35-1.06,0.7-2.13,1.04-3.19c1.51,1.75,3.69,3.26,4.41,5.29
		c1.78,5,4.73,4.2,8.17,2.36c1.89-1.01,3.62-2.41,5.61-3.16c12.22-4.61,24.51-9.02,36.73-13.62c4.76-1.79,9.39-3.9,14.08-5.86
		c10.43-0.32,20.87-0.44,31.28-1.02c15.24-0.85,29.27-5.84,43.2-11.97c14.97-6.58,30.47-12.06,46.03-17.13
		C618.74,172.01,628.17,170.92,637.34,169.02z M449.28,240.57c0.16,0.9,0.31,1.8,0.47,2.7c1.74,0,3.52,0.28,5.2-0.05
		c8.56-1.67,17.06-3.71,25.64-5.22c19-3.35,38.17-4.28,57.46-4.15c7.37,0.05,15.12-0.57,22.04-2.86
		c15.71-5.21,31.07-11.52,46.47-17.62c15.65-6.2,31.41-11.66,48.58-11.41c3.28,0.05,6.69-0.29,9.81-1.22
		c1.4-0.42,2.23-2.75,3.32-4.21c-1.24-0.83-2.5-2.41-3.71-2.37c-7.28,0.21-14.62,0.33-21.81,1.33
		c-20.12,2.81-38.65,10.7-56.74,19.39c-16.59,7.97-34.02,12.79-52.16,12.87c-20.99,0.1-41.7,2.23-62.3,5.51
		C463.92,234.45,456.68,238.05,449.28,240.57z"/>
	<path class="st24" d="M637.45,468.05c-1.37,2.31-2.73,4.61-4.1,6.92c-2.1-0.96-4.36-1.68-6.21-2.98c-0.69-0.48-0.44-2.3-0.62-3.52
		c0.58-0.34,1.15-0.69,1.73-1.03c-8.93-6.8-18.03-13.39-26.74-20.46c-13.5-10.97-26.78-22.2-40.06-33.44
		c-18.2-15.41-34.76-32.62-54.61-46.28c-15.63-10.75-29.46-24.12-44.05-36.37c-4.31-3.62-8.53-7.36-12.73-11.12
		c-0.75-0.67-1.18-1.71-1.76-2.58c0.33-0.55,0.65-1.1,0.98-1.64c2.43,1.08,5.27,1.67,7.24,3.3c17.1,14.16,33.92,28.66,51.1,42.72
		c7.04,5.77,14.8,10.65,22.11,16.1c3.71,2.77,7.35,5.69,10.67,8.91c24.33,23.59,50.11,45.42,77.58,65.29
		C624.79,456.81,630.97,462.64,637.45,468.05z"/>
	<path class="st25" d="M717.31,615.99c0.34,0.33,0.68,0.65,1.02,0.98c0.34,0.66,0.68,1.33,1.01,1.99c0.32,0.67,0.65,1.35,0.97,2.02
		c-0.32,1.66-0.65,3.31-0.97,4.97c-2.12-2.3-4.18-4.66-6.38-6.88c-12.73-12.76-25.49-25.49-38.24-38.23
		c-9.39-9.39-18.67-18.89-28.21-28.12c-5.84-5.65-12.16-10.79-18.13-16.31c-7.04-6.51-13.77-13.37-20.91-19.77
		c-20.39-18.26-40.92-36.35-61.38-54.54c-6.95-6.17-13.87-12.38-20.69-18.68c-1.26-1.16-1.99-2.9-2.96-4.37
		c4.82,3.32,9.98,6.24,14.39,10.04c23.72,20.49,47.31,41.14,70.83,61.87c6.98,6.15,13.56,12.74,20.35,19.11
		c9.33,8.74,18.76,17.39,28,26.22c6.59,6.29,12.86,12.93,19.44,19.23c11.16,10.68,22.5,21.18,33.69,31.83
		C712,610.08,714.59,613.1,717.31,615.99z"/>
	<path class="st26" d="M346.3,230.12c-6.99-4.91-13.82-10.08-21.03-14.66c-6.53-4.15-13.48-7.63-20.23-11.43
		c-2.85-1.6-5.01-0.47-6.02,2.13c-1.51,3.91-2.77,7.98-3.59,12.09c-0.7,3.53-0.63,7.21-0.9,10.82c-1.62-1.35-3.24-2.69-4.86-4.04
		c-0.36-2.53-0.72-5.06-1.08-7.59c0.15-0.45,0.42-0.91,0.42-1.36c-0.03-13.15,4.25-18,18.72-18.18c11.26-0.14,22.51-0.62,33.77-0.82
		c18.9-0.34,37.8-0.57,56.69-0.84c-0.15,1.21-0.29,2.43-0.34,2.8c-26.19,1.89-51.9,3.75-78.26,5.65c2.74,1.98,5.1,3.69,7.47,5.4
		c6.23,5.19,12.47,10.36,18.66,15.59c1.11,0.93,2.02,2.1,3.02,3.15C347.93,229.25,347.12,229.69,346.3,230.12z"/>
	<path class="st27" d="M327.07,210.08c-2.37-1.71-4.74-3.42-7.47-5.4c26.36-1.9,52.07-3.76,78.26-5.65c0.05-0.37,0.19-1.59,0.34-2.8
		c0.36-0.13,0.71-0.26,1.07-0.4c3.7,5.39,7.39,10.79,11.09,16.18c-2.01-2.03-4.11-3.98-6.01-6.11c-2.09-2.33-3.84-5.37-6.47-0.39
		c-0.57,1.07-2.39,1.47-3.66,2.2c1.89,5.13,0.97,6.45-4.16,6.3c-13.23-0.4-26.47-0.41-39.68-1.11
		C342.58,212.49,334.84,211.05,327.07,210.08z"/>
	<path class="st28" d="M289.67,225.03c1.62,1.35,3.24,2.69,4.86,4.04c11.19,10.07,22.45,20.06,33.54,30.25
		c5.22,4.8,10.14,9.93,15.1,15c0.98,1,1.52,2.44,2.27,3.67c-4.22-3.06-8.62-5.9-12.63-9.2c-17.94-14.8-35.77-29.74-53.66-44.61
		c-2.52-2.1-5.13-4.09-7.69-6.14c-0.04-5.01-0.07-10.02-0.11-15.02c0.35-15.28,0.87-30.56,0.97-45.84
		c0.06-8.61-1.06-17.24-0.73-25.82c0.19-4.98-0.76-10.92,4.82-14.33c0,14.66,0,29.31,0,43.97c0.02,5.32,0.04,10.63,0.06,15.95
		c0.32,1.02,0.63,2.04,0.95,3.06c-0.32,2.72-0.64,5.44-0.95,8.17c0.9,8.72,1.54,17.48,2.88,26.12c0.31,2,3.03,3.64,4.64,5.44
		C285.87,221.5,287.77,223.27,289.67,225.03z"/>
	<path class="st16" d="M410.36,212.01c-3.7-5.39-7.39-10.79-11.09-16.18c-1.64-3.58-3.28-7.17-4.92-10.75
		c-0.41-3.13,0.92-4.69,4.01-5.7c3.49-1.14,6.69-3.13,10.02-4.75c4.09-1.27,8.24-2.38,12.26-3.83c11.43-4.11,22.87-8.67,35.24-7.65
		c8.27,0.68,16.42,2.89,24.63,4.42c1.28,5.88-2.91,3.18-4.98,2.95c-12.2-1.39-24.5-4.08-36.45,0.79
		c-12.82,5.22-25.42,10.96-38.48,16.63c5.65,8.82,11.18,17.46,16.71,26.1c0.33,0.67,0.66,1.33,1,2c0.69,1.32,1.38,2.64,2.07,3.96
		c-0.35,1.06-0.7,2.13-1.04,3.19c-1.98-2.4-3.96-4.79-5.94-7.19c-0.69-0.96-1.37-1.91-2.06-2.87
		C411.01,212.76,410.68,212.39,410.36,212.01z"/>
	<path class="st15" d="M346.3,230.12c0.82-0.43,1.63-0.86,2.45-1.3c4.85,3.38,9.91,6.5,14.49,10.2
		c12.76,10.31,25.61,20.54,37.86,31.43c11.14,9.91,21.42,20.79,32.33,30.97c3.23,3.02,7.43,4.97,10.95,7.72
		c1.11,0.87,1.45,2.72,2.15,4.12c-1.6,0.14-3.61,0.97-4.72,0.3c-4.67-2.84-9.55-5.61-13.46-9.33c-11.67-11.11-22.59-23-34.43-33.91
		c-9-8.3-18.91-15.6-28.48-23.28c-5.17-4.15-10.52-8.08-15.63-12.29C348.36,233.55,347.46,231.68,346.3,230.12z"/>
	<path class="st24" d="M676.19,196.32c3.62-0.75,7.21-1.92,10.87-2.17c9.03-0.62,18.09-0.81,27.14-1.18
		c2.33,1.29,4.59,3.49,7.01,3.69c4.99,0.4,10.07-0.27,15.11-0.5c-6.65,0.95-13.28,2.31-19.96,2.74c-10.91,0.69-21.86,1-32.78,0.93
		C681.11,199.81,678.66,197.55,676.19,196.32z"/>
	<path class="st24" d="M738.37,196.21c3.98,0.28,7.97,0.56,11.95,0.84C746.34,196.77,742.36,196.49,738.37,196.21z"/>
	<path class="st27" d="M411.33,213.13c0.69,0.96,1.37,1.91,2.06,2.87C412.7,215.04,412.02,214.09,411.33,213.13z"/>
	<path class="st16" d="M271.34,203.02c0.04,5.01,0.07,10.02,0.11,15.02c-0.12,5.67-0.25,11.33-0.37,16.99
		c-0.89-1.22-2.47-2.4-2.56-3.68c-0.32-4.43-0.12-8.9-0.12-13.36c0.33-3.54,0.52-7.1,1.07-10.6
		C269.7,205.88,270.69,204.48,271.34,203.02z"/>
	<path class="st29" d="M628.33,163.06c1.27,0.13,2.59,0.56,3.8,0.34c3.75-0.67,5.33,0.9,5.25,4.53c-0.01,0.36-0.02,0.72-0.04,1.08
		c-9.17,1.9-18.61,3-27.46,5.88c-15.56,5.07-31.06,10.54-46.03,17.13c-13.93,6.13-27.96,11.12-43.2,11.97
		c-10.41,0.58-20.85,0.7-31.28,1.02c-1.77-0.33-3.55-0.99-5.31-0.94c-6.79,0.19-13.57,0.77-20.36,0.9
		c-13.49,0.26-26.24,3.2-38.27,9.41c-2.11,1.09-4.74,1.14-7.13,1.67c-0.33-0.67-0.66-1.33-1-2c14.68-10.68,31.71-13.99,49.25-14.9
		c12.57-0.66,25.2-0.13,37.81-0.13c16.66,0.5,32.53-2.63,47.86-9.32c14.89-6.49,29.86-12.87,45.13-18.36
		C607.37,167.72,617.98,165.76,628.33,163.06z"/>
	<path class="st21" d="M704.34,166.1c3.33-0.6,6.64-1.56,9.99-1.72c11.68-0.56,23.38-0.83,35.07-1.22c1.73,0.95,3.46,1.91,5.2,2.86
		c-0.19,0.33-0.38,0.65-0.57,0.98c-3.03,0-6.06-0.06-9.09,0.01c-12.05,0.3-24.1,0.72-36.16,0.89
		C707.3,167.92,705.82,166.73,704.34,166.1z"/>
	<path class="st29" d="M449.28,240.57c7.41-2.51,14.64-6.11,22.25-7.33c20.6-3.28,41.3-5.41,62.3-5.51
		c18.14-0.09,35.57-4.91,52.16-12.87c18.09-8.69,36.62-16.57,56.74-19.39c7.2-1.01,14.53-1.12,21.81-1.33
		c1.21-0.03,2.47,1.54,3.71,2.37c-1.09,1.46-1.92,3.79-3.32,4.21c-3.12,0.93-6.53,1.27-9.81,1.22
		c-17.17-0.25-32.93,5.21-48.58,11.41c-15.4,6.11-30.76,12.41-46.47,17.62c-6.92,2.29-14.67,2.91-22.04,2.86
		c-19.29-0.13-38.46,0.8-57.46,4.15c-8.59,1.51-17.08,3.55-25.64,5.22c-1.67,0.33-3.46,0.05-5.2,0.05
		C449.59,242.36,449.43,241.47,449.28,240.57z"/>
	<path class="st15" d="M418.3,216.04c2.39-0.53,5.03-0.58,7.13-1.67c12.03-6.2,24.78-9.15,38.27-9.41
		c6.79-0.13,13.57-0.71,20.36-0.9c1.76-0.05,3.54,0.61,5.31,0.94c-4.69,1.96-9.33,4.07-14.08,5.86
		c-12.22,4.6-24.51,9.02-36.73,13.62c-1.98,0.75-3.71,2.15-5.61,3.16c-3.44,1.84-6.39,2.64-8.17-2.36c-0.72-2.03-2.9-3.54-4.41-5.29
		C419.68,218.68,418.99,217.36,418.3,216.04z"/>
	<path class="st13" d="M283.98,219.73c0.15-3.55,2.23-3.21,4.61-2.29c0.36,2.53,0.72,5.06,1.08,7.59
		C287.77,223.27,285.87,221.5,283.98,219.73z"/>
	<path class="st30" d="M394.35,185.08c-19.73,0.51-39.46,1-59.19,1.52c-19.57,0.51-39.14,1.04-58.7,1.57
		c0.32-2.72,0.64-5.44,0.95-8.17c9.94,2.26,19.69,0.54,29.4-1.53c0.31-0.07,0.47-0.83,0.69-1.27c33.63-0.86,67.25-1.71,100.88-2.57
		c-3.33,1.62-6.54,3.61-10.02,4.75C395.27,180.39,393.95,181.95,394.35,185.08z"/>
	<path class="st20" d="M307.5,177.21c-0.23,0.44-0.39,1.2-0.69,1.27c-9.71,2.07-19.46,3.79-29.4,1.53
		c-0.32-1.02-0.63-2.04-0.95-3.06C286.81,177.03,297.15,177.12,307.5,177.21z"/>
	<path class="st15" d="M504.36,199c-12.61,0-25.24-0.53-37.81,0.13c-17.54,0.92-34.57,4.22-49.25,14.9
		c-5.53-8.64-11.07-17.28-16.72-26.1c13.07-5.67,25.67-11.42,38.48-16.63c11.95-4.86,24.25-2.17,36.45-0.79
		c2.08,0.24,6.27,2.94,4.98-2.95c5.94,0.67,11.88,1.34,17.82,2c1.12,0.81,2.25,2.34,3.35,2.32c8.25-0.14,16.49-0.58,24.73-0.93
		c18.15-0.6,35.56-5.14,52.91-9.99c2.35-0.66,4.69-1.31,7.04-1.97c-2.83,1.97-5.43,4.5-8.54,5.8c-5.93,2.47-12.26,3.94-18.22,6.34
		c-11.7,4.71-23.47,9.33-34.78,14.86C517.6,189.53,511.16,194.62,504.36,199z"/>
	<path class="st22" d="M504.36,199c6.79-4.39,13.24-9.48,20.45-13c11.31-5.53,23.09-10.15,34.78-14.86
		c5.96-2.4,12.29-3.87,18.22-6.34c3.11-1.29,5.71-3.83,8.54-5.8c2.26-0.67,4.48-1.63,6.78-1.96c5.74-0.83,11.52-1.37,17.28-2.03
		c6.57,1.35,13.11,2.76,17.91,8.05c-10.35,2.7-20.96,4.66-30.98,8.27c-15.27,5.5-30.24,11.87-45.13,18.36
		C536.9,196.37,521.02,199.51,504.36,199z"/>
	<path class="st16" d="M579.32,160.97c-17.35,4.85-34.76,9.39-52.91,9.99c0.31-1.3,0.63-2.59,0.94-3.89
		c12.81-2.35,25.63-4.67,38.44-7.07c2.58-0.48,5.09-1.31,7.63-1.97c1.01-0.35,2.02-0.71,3.04-1.06c0,0,0.35,0,0.35,0
		C577.65,158.3,578.49,159.64,579.32,160.97z"/>
	<path class="st19" d="M579.32,160.97c-0.84-1.34-1.67-2.68-2.51-4.01c11.03-3.62,22.08-6.93,33.61-1.95
		c-5.76,0.66-11.54,1.21-17.28,2.03c-2.31,0.33-4.53,1.29-6.78,1.96C584.01,159.66,581.67,160.32,579.32,160.97z"/>
	<path class="st19" d="M527.35,167.07c-0.31,1.3-0.63,2.6-0.94,3.89c-8.24,0.35-16.48,0.79-24.73,0.93
		c-1.1,0.02-2.24-1.51-3.35-2.32C508.01,168.74,517.68,167.91,527.35,167.07z"/>
	<path class="st19" d="M576.46,156.96c-1.01,0.35-2.02,0.71-3.04,1.06C574.44,157.67,575.45,157.32,576.46,156.96z"/>
</g>
</svg>


            </div>
        );
    }
}

export default Bed;
