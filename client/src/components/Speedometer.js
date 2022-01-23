function Speedometer({ speed }) {
	const dialSvg = (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="50" cy="50" r="50" fill="#C4BEB6" />
			<circle cx="50" cy="50" r="45" fill="#212322" />
			<rect
				x="9.24317"
				y="54.5696"
				width="8"
				height="2"
				transform="rotate(175 9.24317 54.5696)"
				fill="#C4BEB6"
			/>
			<rect
				x="4.29708"
				y="32.3013"
				width="8"
				height="2"
				transform="rotate(20 4.29708 32.3013)"
				fill="#C4BEB6"
			/>
			<rect
				x="16.0589"
				y="14.6447"
				width="8"
				height="2"
				transform="rotate(45 16.0589 14.6447)"
				fill="#C4BEB6"
			/>
			<rect
				x="34.1807"
				y="3.61304"
				width="8"
				height="2"
				transform="rotate(70 34.1807 3.61304)"
				fill="#C4BEB6"
			/>
			<rect
				x="27.3025"
				y="84.1588"
				width="8"
				height="2"
				transform="rotate(125 27.3025 84.1588)"
				fill="#C4BEB6"
			/>
			<rect
				x="75.366"
				y="8.06476"
				width="8"
				height="2"
				transform="rotate(120 75.366 8.06476)"
				fill="#C4BEB6"
			/>
			<rect
				x="90.712"
				y="22.7139"
				width="8"
				height="2"
				transform="rotate(145 90.712 22.7139)"
				fill="#C4BEB6"
			/>
			<rect
				x="14.993"
				y="71.366"
				width="8"
				height="2"
				transform="rotate(150 14.993 71.366)"
				fill="#C4BEB6"
			/>
			<rect
				x="55.2668"
				y="1.27362"
				width="8"
				height="2"
				transform="rotate(95 55.2668 1.27362)"
				fill="#C4BEB6"
			/>
			<path
				d="M31.2578 77.6484V78.6602C31.2578 79.0768 31.2109 79.4375 31.1172 79.7422C31.026 80.0469 30.8932 80.2982 30.7188 80.4961C30.5469 80.694 30.3411 80.8411 30.1016 80.9375C29.8646 81.0312 29.6016 81.0781 29.3125 81.0781C29.0807 81.0781 28.8646 81.0482 28.6641 80.9883C28.4635 80.9284 28.2826 80.8359 28.1211 80.7109C27.9622 80.5833 27.8255 80.4245 27.7109 80.2344C27.5964 80.0443 27.5078 79.8177 27.4453 79.5547C27.3854 79.2917 27.3555 78.9935 27.3555 78.6602V77.6484C27.3555 77.2266 27.401 76.8646 27.4922 76.5625C27.5859 76.2604 27.7201 76.0104 27.8945 75.8125C28.069 75.6146 28.2747 75.4688 28.5117 75.375C28.7513 75.2812 29.0156 75.2344 29.3047 75.2344C29.5365 75.2344 29.7513 75.2643 29.9492 75.3242C30.1497 75.3841 30.3307 75.4766 30.4922 75.6016C30.6536 75.7266 30.7904 75.8841 30.9023 76.0742C31.0169 76.2643 31.1042 76.4909 31.1641 76.7539C31.2266 77.0143 31.2578 77.3125 31.2578 77.6484ZM30.0391 78.8125V77.4883C30.0391 77.293 30.0273 77.1237 30.0039 76.9805C29.9831 76.8346 29.9518 76.7109 29.9102 76.6094C29.8711 76.5078 29.8216 76.4258 29.7617 76.3633C29.7018 76.3008 29.6328 76.2552 29.5547 76.2266C29.4792 76.1953 29.3958 76.1797 29.3047 76.1797C29.1901 76.1797 29.0872 76.2031 28.9961 76.25C28.9049 76.2969 28.8281 76.3711 28.7656 76.4727C28.7031 76.5716 28.6549 76.7057 28.6211 76.875C28.5898 77.0417 28.5742 77.2461 28.5742 77.4883V78.8125C28.5742 79.0078 28.5846 79.1784 28.6055 79.3242C28.6289 79.4701 28.6602 79.5951 28.6992 79.6992C28.7409 79.8008 28.7917 79.8841 28.8516 79.9492C28.9115 80.0117 28.9805 80.0573 29.0586 80.0859C29.1367 80.1146 29.2214 80.1289 29.3125 80.1289C29.4271 80.1289 29.5286 80.1068 29.6172 80.0625C29.7057 80.0156 29.7812 79.9414 29.8438 79.8398C29.9089 79.7357 29.957 79.599 29.9883 79.4297C30.0221 79.2604 30.0391 79.0547 30.0391 78.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M19.1992 65.3086V71H17.9766V66.6992L16.6562 67.1016V66.1562L19.0781 65.3086H19.1992ZM23.675 67.6484V68.6602C23.675 69.0768 23.6281 69.4375 23.5344 69.7422C23.4432 70.0469 23.3104 70.2982 23.1359 70.4961C22.9641 70.694 22.7583 70.8411 22.5187 70.9375C22.2818 71.0312 22.0187 71.0781 21.7297 71.0781C21.4979 71.0781 21.2818 71.0482 21.0812 70.9883C20.8807 70.9284 20.6997 70.8359 20.5383 70.7109C20.3794 70.5833 20.2427 70.4245 20.1281 70.2344C20.0135 70.0443 19.925 69.8177 19.8625 69.5547C19.8026 69.2917 19.7727 68.9935 19.7727 68.6602V67.6484C19.7727 67.2266 19.8182 66.8646 19.9094 66.5625C20.0031 66.2604 20.1372 66.0104 20.3117 65.8125C20.4862 65.6146 20.6919 65.4688 20.9289 65.375C21.1685 65.2812 21.4328 65.2344 21.7219 65.2344C21.9536 65.2344 22.1685 65.2643 22.3664 65.3242C22.5669 65.3841 22.7479 65.4766 22.9094 65.6016C23.0708 65.7266 23.2076 65.8841 23.3195 66.0742C23.4341 66.2643 23.5214 66.4909 23.5812 66.7539C23.6437 67.0143 23.675 67.3125 23.675 67.6484ZM22.4562 68.8125V67.4883C22.4562 67.293 22.4445 67.1237 22.4211 66.9805C22.4003 66.8346 22.369 66.7109 22.3273 66.6094C22.2883 66.5078 22.2388 66.4258 22.1789 66.3633C22.119 66.3008 22.05 66.2552 21.9719 66.2266C21.8964 66.1953 21.813 66.1797 21.7219 66.1797C21.6073 66.1797 21.5044 66.2031 21.4133 66.25C21.3221 66.2969 21.2453 66.3711 21.1828 66.4727C21.1203 66.5716 21.0721 66.7057 21.0383 66.875C21.007 67.0417 20.9914 67.2461 20.9914 67.4883V68.8125C20.9914 69.0078 21.0018 69.1784 21.0227 69.3242C21.0461 69.4701 21.0773 69.5951 21.1164 69.6992C21.1581 69.8008 21.2089 69.8841 21.2687 69.9492C21.3286 70.0117 21.3977 70.0573 21.4758 70.0859C21.5539 70.1146 21.6385 70.1289 21.7297 70.1289C21.8443 70.1289 21.9458 70.1068 22.0344 70.0625C22.1229 70.0156 22.1984 69.9414 22.2609 69.8398C22.326 69.7357 22.3742 69.599 22.4055 69.4297C22.4393 69.2604 22.4562 69.0547 22.4562 68.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M16.3008 55.0508V56H12.3711V55.1953L14.207 53.25C14.3789 53.0521 14.5156 52.8776 14.6172 52.7266C14.7214 52.5755 14.7969 52.4388 14.8438 52.3164C14.8906 52.1914 14.9141 52.0768 14.9141 51.9727C14.9141 51.8034 14.8867 51.6602 14.832 51.543C14.7799 51.4258 14.7031 51.3359 14.6016 51.2734C14.5 51.2109 14.3763 51.1797 14.2305 51.1797C14.0742 51.1797 13.9401 51.2201 13.8281 51.3008C13.7161 51.3815 13.6302 51.4935 13.5703 51.6367C13.5104 51.7773 13.4805 51.9375 13.4805 52.1172H12.2539C12.2539 51.7708 12.3372 51.4557 12.5039 51.1719C12.6706 50.8854 12.9036 50.6576 13.2031 50.4883C13.5026 50.3164 13.8529 50.2305 14.2539 50.2305C14.6654 50.2305 15.0104 50.2956 15.2891 50.4258C15.5677 50.556 15.7786 50.7422 15.9219 50.9844C16.0651 51.2266 16.1367 51.5182 16.1367 51.8594C16.1367 52.0521 16.1055 52.2383 16.043 52.418C15.9831 52.5977 15.8958 52.776 15.7812 52.9531C15.6667 53.1302 15.5286 53.3112 15.3672 53.4961C15.2057 53.6784 15.0234 53.8711 14.8203 54.0742L13.9609 55.0508H16.3008ZM20.315 52.6484V53.6602C20.315 54.0768 20.2681 54.4375 20.1744 54.7422C20.0832 55.0469 19.9504 55.2982 19.7759 55.4961C19.6041 55.694 19.3983 55.8411 19.1588 55.9375C18.9218 56.0312 18.6588 56.0781 18.3697 56.0781C18.1379 56.0781 17.9218 56.0482 17.7213 55.9883C17.5207 55.9284 17.3397 55.8359 17.1783 55.7109C17.0194 55.5833 16.8827 55.4245 16.7681 55.2344C16.6535 55.0443 16.565 54.8177 16.5025 54.5547C16.4426 54.2917 16.4127 53.9935 16.4127 53.6602V52.6484C16.4127 52.2266 16.4582 51.8646 16.5494 51.5625C16.6431 51.2604 16.7772 51.0104 16.9517 50.8125C17.1262 50.6146 17.3319 50.4688 17.5689 50.375C17.8085 50.2812 18.0728 50.2344 18.3619 50.2344C18.5936 50.2344 18.8085 50.2643 19.0064 50.3242C19.2069 50.3841 19.3879 50.4766 19.5494 50.6016C19.7108 50.7266 19.8476 50.8841 19.9595 51.0742C20.0741 51.2643 20.1614 51.4909 20.2213 51.7539C20.2838 52.0143 20.315 52.3125 20.315 52.6484ZM19.0963 53.8125V52.4883C19.0963 52.293 19.0845 52.1237 19.0611 51.9805C19.0403 51.8346 19.009 51.7109 18.9673 51.6094C18.9283 51.5078 18.8788 51.4258 18.8189 51.3633C18.759 51.3008 18.69 51.2552 18.6119 51.2266C18.5364 51.1953 18.453 51.1797 18.3619 51.1797C18.2473 51.1797 18.1444 51.2031 18.0533 51.25C17.9621 51.2969 17.8853 51.3711 17.8228 51.4727C17.7603 51.5716 17.7121 51.7057 17.6783 51.875C17.647 52.0417 17.6314 52.2461 17.6314 52.4883V53.8125C17.6314 54.0078 17.6418 54.1784 17.6627 54.3242C17.6861 54.4701 17.7173 54.5951 17.7564 54.6992C17.7981 54.8008 17.8489 54.8841 17.9088 54.9492C17.9686 55.0117 18.0377 55.0573 18.1158 55.0859C18.1939 55.1146 18.2785 55.1289 18.3697 55.1289C18.4843 55.1289 18.5858 55.1068 18.6744 55.0625C18.7629 55.0156 18.8384 54.9414 18.9009 54.8398C18.966 54.7357 19.0142 54.599 19.0455 54.4297C19.0793 54.2604 19.0963 54.0547 19.0963 53.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M15.5469 37.6367H16.168C16.3451 37.6367 16.4909 37.6055 16.6055 37.543C16.7227 37.4805 16.8086 37.3919 16.8633 37.2773C16.9206 37.1628 16.9492 37.0286 16.9492 36.875C16.9492 36.7422 16.9232 36.6237 16.8711 36.5195C16.819 36.4154 16.7396 36.3333 16.6328 36.2734C16.5286 36.2109 16.3932 36.1797 16.2266 36.1797C16.1068 36.1797 15.9922 36.2044 15.8828 36.2539C15.776 36.3008 15.6888 36.3698 15.6211 36.4609C15.5534 36.5495 15.5195 36.6562 15.5195 36.7812H14.2969C14.2969 36.4635 14.3828 36.1888 14.5547 35.957C14.7292 35.7253 14.9596 35.5469 15.2461 35.4219C15.5352 35.2943 15.8503 35.2305 16.1914 35.2305C16.5846 35.2305 16.9297 35.293 17.2266 35.418C17.526 35.5404 17.7578 35.7227 17.9219 35.9648C18.0885 36.2044 18.1719 36.5013 18.1719 36.8555C18.1719 37.0404 18.1276 37.2188 18.0391 37.3906C17.9531 37.5599 17.8294 37.7109 17.668 37.8438C17.5091 37.974 17.319 38.0781 17.0977 38.1562C16.8789 38.2318 16.6354 38.2695 16.3672 38.2695H15.5469V37.6367ZM15.5469 38.5547V37.9336H16.3672C16.6641 37.9336 16.9297 37.9674 17.1641 38.0352C17.3984 38.1029 17.5977 38.2005 17.7617 38.3281C17.9258 38.4557 18.0508 38.6107 18.1367 38.793C18.2227 38.9753 18.2656 39.1784 18.2656 39.4023C18.2656 39.668 18.2135 39.9049 18.1094 40.1133C18.0052 40.3216 17.8594 40.4974 17.6719 40.6406C17.4844 40.7839 17.2643 40.8932 17.0117 40.9688C16.7591 41.0417 16.4857 41.0781 16.1914 41.0781C15.9544 41.0781 15.7188 41.0456 15.4844 40.9805C15.25 40.9154 15.0378 40.8164 14.8477 40.6836C14.6576 40.5482 14.5052 40.3776 14.3906 40.1719C14.276 39.9635 14.2188 39.7161 14.2188 39.4297H15.4414C15.4414 39.5625 15.4753 39.6823 15.543 39.7891C15.6133 39.8932 15.7083 39.9766 15.8281 40.0391C15.9505 40.099 16.0833 40.1289 16.2266 40.1289C16.3984 40.1289 16.5443 40.0977 16.6641 40.0352C16.7865 39.9701 16.8789 39.8815 16.9414 39.7695C17.0065 39.6576 17.0391 39.5286 17.0391 39.3828C17.0391 39.1849 17.0039 39.026 16.9336 38.9062C16.8659 38.7839 16.7669 38.6953 16.6367 38.6406C16.5065 38.5833 16.3503 38.5547 16.168 38.5547H15.5469ZM22.315 37.6484V38.6602C22.315 39.0768 22.2681 39.4375 22.1744 39.7422C22.0832 40.0469 21.9504 40.2982 21.7759 40.4961C21.6041 40.694 21.3983 40.8411 21.1588 40.9375C20.9218 41.0312 20.6588 41.0781 20.3697 41.0781C20.1379 41.0781 19.9218 41.0482 19.7213 40.9883C19.5207 40.9284 19.3397 40.8359 19.1783 40.7109C19.0194 40.5833 18.8827 40.4245 18.7681 40.2344C18.6535 40.0443 18.565 39.8177 18.5025 39.5547C18.4426 39.2917 18.4127 38.9935 18.4127 38.6602V37.6484C18.4127 37.2266 18.4582 36.8646 18.5494 36.5625C18.6431 36.2604 18.7772 36.0104 18.9517 35.8125C19.1262 35.6146 19.3319 35.4688 19.5689 35.375C19.8085 35.2812 20.0728 35.2344 20.3619 35.2344C20.5936 35.2344 20.8085 35.2643 21.0064 35.3242C21.2069 35.3841 21.3879 35.4766 21.5494 35.6016C21.7108 35.7266 21.8476 35.8841 21.9595 36.0742C22.0741 36.2643 22.1614 36.4909 22.2213 36.7539C22.2838 37.0143 22.315 37.3125 22.315 37.6484ZM21.0963 38.8125V37.4883C21.0963 37.293 21.0845 37.1237 21.0611 36.9805C21.0403 36.8346 21.009 36.7109 20.9673 36.6094C20.9283 36.5078 20.8788 36.4258 20.8189 36.3633C20.759 36.3008 20.69 36.2552 20.6119 36.2266C20.5364 36.1953 20.453 36.1797 20.3619 36.1797C20.2473 36.1797 20.1444 36.2031 20.0533 36.25C19.9621 36.2969 19.8853 36.3711 19.8228 36.4727C19.7603 36.5716 19.7121 36.7057 19.6783 36.875C19.647 37.0417 19.6314 37.2461 19.6314 37.4883V38.8125C19.6314 39.0078 19.6418 39.1784 19.6627 39.3242C19.6861 39.4701 19.7173 39.5951 19.7564 39.6992C19.7981 39.8008 19.8489 39.8841 19.9088 39.9492C19.9686 40.0117 20.0377 40.0573 20.1158 40.0859C20.1939 40.1146 20.2785 40.1289 20.3697 40.1289C20.4843 40.1289 20.5858 40.1068 20.6744 40.0625C20.7629 40.0156 20.8384 39.9414 20.9009 39.8398C20.966 39.7357 21.0142 39.599 21.0455 39.4297C21.0793 39.2604 21.0963 39.0547 21.0963 38.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M26.3867 25.8281V26.7734H22.293L22.2266 26.0312L24.5547 22.3125H25.5195L24.4727 24.0469L23.4141 25.8281H26.3867ZM25.7773 22.3125V28H24.5586V22.3125H25.7773ZM30.315 24.6484V25.6602C30.315 26.0768 30.2681 26.4375 30.1744 26.7422C30.0832 27.0469 29.9504 27.2982 29.7759 27.4961C29.6041 27.694 29.3983 27.8411 29.1588 27.9375C28.9218 28.0312 28.6588 28.0781 28.3697 28.0781C28.1379 28.0781 27.9218 28.0482 27.7213 27.9883C27.5207 27.9284 27.3397 27.8359 27.1783 27.7109C27.0194 27.5833 26.8827 27.4245 26.7681 27.2344C26.6535 27.0443 26.565 26.8177 26.5025 26.5547C26.4426 26.2917 26.4127 25.9935 26.4127 25.6602V24.6484C26.4127 24.2266 26.4582 23.8646 26.5494 23.5625C26.6431 23.2604 26.7772 23.0104 26.9517 22.8125C27.1262 22.6146 27.3319 22.4688 27.5689 22.375C27.8085 22.2812 28.0728 22.2344 28.3619 22.2344C28.5936 22.2344 28.8085 22.2643 29.0064 22.3242C29.2069 22.3841 29.3879 22.4766 29.5494 22.6016C29.7108 22.7266 29.8476 22.8841 29.9595 23.0742C30.0741 23.2643 30.1614 23.4909 30.2213 23.7539C30.2838 24.0143 30.315 24.3125 30.315 24.6484ZM29.0963 25.8125V24.4883C29.0963 24.293 29.0845 24.1237 29.0611 23.9805C29.0403 23.8346 29.009 23.7109 28.9673 23.6094C28.9283 23.5078 28.8788 23.4258 28.8189 23.3633C28.759 23.3008 28.69 23.2552 28.6119 23.2266C28.5364 23.1953 28.453 23.1797 28.3619 23.1797C28.2473 23.1797 28.1444 23.2031 28.0533 23.25C27.9621 23.2969 27.8853 23.3711 27.8228 23.4727C27.7603 23.5716 27.7121 23.7057 27.6783 23.875C27.647 24.0417 27.6314 24.2461 27.6314 24.4883V25.8125C27.6314 26.0078 27.6418 26.1784 27.6627 26.3242C27.6861 26.4701 27.7173 26.5951 27.7564 26.6992C27.7981 26.8008 27.8489 26.8841 27.9088 26.9492C27.9686 27.0117 28.0377 27.0573 28.1158 27.0859C28.1939 27.1146 28.2785 27.1289 28.3697 27.1289C28.4843 27.1289 28.5858 27.1068 28.6744 27.0625C28.7629 27.0156 28.8384 26.9414 28.9009 26.8398C28.966 26.7357 29.0142 26.599 29.0455 26.4297C29.0793 26.2604 29.0963 26.0547 29.0963 25.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M36.4609 18.4375L35.4922 18.207L35.8242 15.3125H39.082V16.2773H36.8242L36.6875 17.4766C36.7578 17.4349 36.8685 17.3893 37.0195 17.3398C37.1706 17.2878 37.3398 17.2617 37.5273 17.2617C37.806 17.2617 38.0534 17.3047 38.2695 17.3906C38.4857 17.4766 38.668 17.6016 38.8164 17.7656C38.9674 17.9271 39.0807 18.1263 39.1562 18.3633C39.2344 18.6003 39.2734 18.8698 39.2734 19.1719C39.2734 19.4219 39.2344 19.6615 39.1562 19.8906C39.0781 20.1172 38.9583 20.3203 38.7969 20.5C38.638 20.6771 38.4362 20.8177 38.1914 20.9219C37.9466 21.026 37.6589 21.0781 37.3281 21.0781C37.0781 21.0781 36.8359 21.0404 36.6016 20.9648C36.3672 20.8893 36.1562 20.7799 35.9688 20.6367C35.7839 20.4909 35.6367 20.3138 35.5273 20.1055C35.4206 19.8971 35.3659 19.6628 35.3633 19.4023H36.582C36.5951 19.5534 36.6328 19.6836 36.6953 19.793C36.7578 19.8997 36.8424 19.9831 36.9492 20.043C37.056 20.1003 37.1797 20.1289 37.3203 20.1289C37.4557 20.1289 37.5703 20.1029 37.6641 20.0508C37.7578 19.9961 37.832 19.9219 37.8867 19.8281C37.944 19.7344 37.9857 19.625 38.0117 19.5C38.0378 19.375 38.0508 19.2409 38.0508 19.0977C38.0508 18.9492 38.0339 18.8164 38 18.6992C37.9661 18.5794 37.9141 18.4779 37.8438 18.3945C37.7734 18.3086 37.6836 18.2435 37.5742 18.1992C37.4674 18.1523 37.3385 18.1289 37.1875 18.1289C36.9896 18.1289 36.8346 18.1615 36.7227 18.2266C36.6107 18.2917 36.5234 18.362 36.4609 18.4375ZM43.315 17.6484V18.6602C43.315 19.0768 43.2681 19.4375 43.1744 19.7422C43.0832 20.0469 42.9504 20.2982 42.7759 20.4961C42.6041 20.694 42.3983 20.8411 42.1588 20.9375C41.9218 21.0312 41.6588 21.0781 41.3697 21.0781C41.1379 21.0781 40.9218 21.0482 40.7213 20.9883C40.5207 20.9284 40.3397 20.8359 40.1783 20.7109C40.0194 20.5833 39.8827 20.4245 39.7681 20.2344C39.6535 20.0443 39.565 19.8177 39.5025 19.5547C39.4426 19.2917 39.4127 18.9935 39.4127 18.6602V17.6484C39.4127 17.2266 39.4582 16.8646 39.5494 16.5625C39.6431 16.2604 39.7772 16.0104 39.9517 15.8125C40.1262 15.6146 40.3319 15.4688 40.5689 15.375C40.8085 15.2812 41.0728 15.2344 41.3619 15.2344C41.5936 15.2344 41.8085 15.2643 42.0064 15.3242C42.2069 15.3841 42.3879 15.4766 42.5494 15.6016C42.7108 15.7266 42.8476 15.8841 42.9595 16.0742C43.0741 16.2643 43.1614 16.4909 43.2213 16.7539C43.2838 17.0143 43.315 17.3125 43.315 17.6484ZM42.0963 18.8125V17.4883C42.0963 17.293 42.0845 17.1237 42.0611 16.9805C42.0403 16.8346 42.009 16.7109 41.9673 16.6094C41.9283 16.5078 41.8788 16.4258 41.8189 16.3633C41.759 16.3008 41.69 16.2552 41.6119 16.2266C41.5364 16.1953 41.453 16.1797 41.3619 16.1797C41.2473 16.1797 41.1444 16.2031 41.0533 16.25C40.9621 16.2969 40.8853 16.3711 40.8228 16.4727C40.7603 16.5716 40.7121 16.7057 40.6783 16.875C40.647 17.0417 40.6314 17.2461 40.6314 17.4883V18.8125C40.6314 19.0078 40.6418 19.1784 40.6627 19.3242C40.6861 19.4701 40.7173 19.5951 40.7564 19.6992C40.7981 19.8008 40.8489 19.8841 40.9088 19.9492C40.9686 20.0117 41.0377 20.0573 41.1158 20.0859C41.1939 20.1146 41.2785 20.1289 41.3697 20.1289C41.4843 20.1289 41.5858 20.1068 41.6744 20.0625C41.7629 20.0156 41.8384 19.9414 41.9009 19.8398C41.966 19.7357 42.0142 19.599 42.0455 19.4297C42.0793 19.2604 42.0963 19.0547 42.0963 18.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M52.3047 13.2422H52.4922V14.2109H52.4219C52.1484 14.2109 51.8984 14.25 51.6719 14.3281C51.4479 14.4062 51.2539 14.5221 51.0898 14.6758C50.9258 14.8268 50.7995 15.0143 50.7109 15.2383C50.625 15.4596 50.582 15.7148 50.582 16.0039V16.9727C50.582 17.168 50.599 17.3385 50.6328 17.4844C50.6693 17.6276 50.7214 17.7474 50.7891 17.8438C50.8594 17.9375 50.944 18.0091 51.043 18.0586C51.1419 18.1055 51.2539 18.1289 51.3789 18.1289C51.4909 18.1289 51.5938 18.1042 51.6875 18.0547C51.7812 18.0052 51.862 17.9349 51.9297 17.8438C51.9974 17.7526 52.0495 17.6471 52.0859 17.5273C52.1224 17.4049 52.1406 17.2721 52.1406 17.1289C52.1406 16.9779 52.1211 16.8411 52.082 16.7188C52.0456 16.5938 51.9922 16.487 51.9219 16.3984C51.8542 16.3099 51.7708 16.2422 51.6719 16.1953C51.5729 16.1458 51.4635 16.1211 51.3438 16.1211C51.1719 16.1211 51.0234 16.1602 50.8984 16.2383C50.7734 16.3164 50.6771 16.4167 50.6094 16.5391C50.5417 16.6615 50.5065 16.7865 50.5039 16.9141L50.1797 16.6445C50.1797 16.4674 50.2148 16.293 50.2852 16.1211C50.3581 15.9466 50.4609 15.7891 50.5938 15.6484C50.7266 15.5052 50.8893 15.3919 51.082 15.3086C51.2773 15.2227 51.5 15.1797 51.75 15.1797C52.013 15.1797 52.2448 15.2305 52.4453 15.332C52.6458 15.431 52.8138 15.569 52.9492 15.7461C53.0872 15.9232 53.1901 16.1302 53.2578 16.3672C53.3281 16.6016 53.3633 16.8529 53.3633 17.1211C53.3633 17.3971 53.3151 17.6549 53.2188 17.8945C53.125 18.1315 52.9922 18.3385 52.8203 18.5156C52.6484 18.6927 52.4427 18.8307 52.2031 18.9297C51.9661 19.0286 51.7018 19.0781 51.4102 19.0781C51.1081 19.0781 50.832 19.0247 50.582 18.918C50.3346 18.8112 50.1185 18.6589 49.9336 18.4609C49.7513 18.2604 49.6094 18.0208 49.5078 17.7422C49.4089 17.4635 49.3594 17.151 49.3594 16.8047V16.3477C49.3594 15.8737 49.4323 15.4466 49.5781 15.0664C49.7266 14.6862 49.9323 14.3607 50.1953 14.0898C50.4609 13.8164 50.7734 13.6068 51.1328 13.4609C51.4922 13.3151 51.8828 13.2422 52.3047 13.2422ZM57.315 15.6484V16.6602C57.315 17.0768 57.2681 17.4375 57.1744 17.7422C57.0832 18.0469 56.9504 18.2982 56.7759 18.4961C56.6041 18.694 56.3983 18.8411 56.1588 18.9375C55.9218 19.0312 55.6588 19.0781 55.3697 19.0781C55.1379 19.0781 54.9218 19.0482 54.7213 18.9883C54.5207 18.9284 54.3397 18.8359 54.1783 18.7109C54.0194 18.5833 53.8827 18.4245 53.7681 18.2344C53.6535 18.0443 53.565 17.8177 53.5025 17.5547C53.4426 17.2917 53.4127 16.9935 53.4127 16.6602V15.6484C53.4127 15.2266 53.4582 14.8646 53.5494 14.5625C53.6431 14.2604 53.7772 14.0104 53.9517 13.8125C54.1262 13.6146 54.3319 13.4688 54.5689 13.375C54.8085 13.2812 55.0728 13.2344 55.3619 13.2344C55.5936 13.2344 55.8085 13.2643 56.0064 13.3242C56.2069 13.3841 56.3879 13.4766 56.5494 13.6016C56.7108 13.7266 56.8476 13.8841 56.9595 14.0742C57.0741 14.2643 57.1614 14.4909 57.2213 14.7539C57.2838 15.0143 57.315 15.3125 57.315 15.6484ZM56.0963 16.8125V15.4883C56.0963 15.293 56.0845 15.1237 56.0611 14.9805C56.0403 14.8346 56.009 14.7109 55.9673 14.6094C55.9283 14.5078 55.8788 14.4258 55.8189 14.3633C55.759 14.3008 55.69 14.2552 55.6119 14.2266C55.5364 14.1953 55.453 14.1797 55.3619 14.1797C55.2473 14.1797 55.1444 14.2031 55.0533 14.25C54.9621 14.2969 54.8853 14.3711 54.8228 14.4727C54.7603 14.5716 54.7121 14.7057 54.6783 14.875C54.647 15.0417 54.6314 15.2461 54.6314 15.4883V16.8125C54.6314 17.0078 54.6418 17.1784 54.6627 17.3242C54.6861 17.4701 54.7173 17.5951 54.7564 17.6992C54.7981 17.8008 54.8489 17.8841 54.9088 17.9492C54.9686 18.0117 55.0377 18.0573 55.1158 18.0859C55.1939 18.1146 55.2785 18.1289 55.3697 18.1289C55.4843 18.1289 55.5858 18.1068 55.6744 18.0625C55.7629 18.0156 55.8384 17.9414 55.9009 17.8398C55.966 17.7357 56.0142 17.599 56.0455 17.4297C56.0793 17.2604 56.0963 17.0547 56.0963 16.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M67.2812 18.3125V18.9688L65.1172 24H63.8281L65.9922 19.2617H63.2188V18.3125H67.2812ZM71.315 20.6484V21.6602C71.315 22.0768 71.2681 22.4375 71.1744 22.7422C71.0832 23.0469 70.9504 23.2982 70.7759 23.4961C70.6041 23.694 70.3983 23.8411 70.1588 23.9375C69.9218 24.0312 69.6588 24.0781 69.3697 24.0781C69.1379 24.0781 68.9218 24.0482 68.7213 23.9883C68.5207 23.9284 68.3397 23.8359 68.1783 23.7109C68.0194 23.5833 67.8827 23.4245 67.7681 23.2344C67.6535 23.0443 67.565 22.8177 67.5025 22.5547C67.4426 22.2917 67.4127 21.9935 67.4127 21.6602V20.6484C67.4127 20.2266 67.4582 19.8646 67.5494 19.5625C67.6431 19.2604 67.7772 19.0104 67.9517 18.8125C68.1262 18.6146 68.3319 18.4688 68.5689 18.375C68.8085 18.2812 69.0728 18.2344 69.3619 18.2344C69.5936 18.2344 69.8085 18.2643 70.0064 18.3242C70.2069 18.3841 70.3879 18.4766 70.5494 18.6016C70.7108 18.7266 70.8476 18.8841 70.9595 19.0742C71.0741 19.2643 71.1614 19.4909 71.2213 19.7539C71.2838 20.0143 71.315 20.3125 71.315 20.6484ZM70.0963 21.8125V20.4883C70.0963 20.293 70.0845 20.1237 70.0611 19.9805C70.0403 19.8346 70.009 19.7109 69.9673 19.6094C69.9283 19.5078 69.8788 19.4258 69.8189 19.3633C69.759 19.3008 69.69 19.2552 69.6119 19.2266C69.5364 19.1953 69.453 19.1797 69.3619 19.1797C69.2473 19.1797 69.1444 19.2031 69.0533 19.25C68.9621 19.2969 68.8853 19.3711 68.8228 19.4727C68.7603 19.5716 68.7121 19.7057 68.6783 19.875C68.647 20.0417 68.6314 20.2461 68.6314 20.4883V21.8125C68.6314 22.0078 68.6418 22.1784 68.6627 22.3242C68.6861 22.4701 68.7173 22.5951 68.7564 22.6992C68.7981 22.8008 68.8489 22.8841 68.9088 22.9492C68.9686 23.0117 69.0377 23.0573 69.1158 23.0859C69.1939 23.1146 69.2785 23.1289 69.3697 23.1289C69.4843 23.1289 69.5858 23.1068 69.6744 23.0625C69.7629 23.0156 69.8384 22.9414 69.9009 22.8398C69.966 22.7357 70.0142 22.599 70.0455 22.4297C70.0793 22.2604 70.0963 22.0547 70.0963 21.8125Z"
				fill="#C4BEB6"
			/>
			<path
				d="M77.2617 32.4375C77.2617 32.7969 77.1771 33.099 77.0078 33.3438C76.8385 33.5885 76.6068 33.7721 76.3125 33.8945C76.0208 34.0169 75.6875 34.0781 75.3125 34.0781C74.9401 34.0781 74.6055 34.0169 74.3086 33.8945C74.0143 33.7721 73.7812 33.5885 73.6094 33.3438C73.4375 33.099 73.3516 32.7969 73.3516 32.4375C73.3516 32.1927 73.3997 31.9727 73.4961 31.7773C73.5951 31.582 73.7318 31.4154 73.9062 31.2773C74.0833 31.1393 74.2904 31.0339 74.5273 30.9609C74.7669 30.888 75.026 30.8516 75.3047 30.8516C75.6797 30.8516 76.0143 30.9167 76.3086 31.0469C76.6055 31.1745 76.8385 31.3568 77.0078 31.5938C77.1771 31.8307 77.2617 32.112 77.2617 32.4375ZM76.0352 32.3477C76.0352 32.181 76.0039 32.0404 75.9414 31.9258C75.8815 31.8086 75.7969 31.7188 75.6875 31.6562C75.5781 31.5911 75.4505 31.5586 75.3047 31.5586C75.1589 31.5586 75.0312 31.5911 74.9219 31.6562C74.8125 31.7188 74.7266 31.8086 74.6641 31.9258C74.6042 32.0404 74.5742 32.181 74.5742 32.3477C74.5742 32.5091 74.6055 32.6497 74.668 32.7695C74.7305 32.8867 74.8164 32.9766 74.9258 33.0391C75.0352 33.099 75.1641 33.1289 75.3125 33.1289C75.4609 33.1289 75.5885 33.099 75.6953 33.0391C75.8021 32.9766 75.8854 32.8867 75.9453 32.7695C76.0052 32.6497 76.0352 32.5091 76.0352 32.3477ZM77.1406 29.8242C77.1406 30.1185 77.0625 30.3776 76.9062 30.6016C76.7526 30.8229 76.5378 30.9961 76.2617 31.1211C75.9857 31.2435 75.6693 31.3047 75.3125 31.3047C74.9557 31.3047 74.638 31.2435 74.3594 31.1211C74.0833 30.9961 73.8659 30.8229 73.707 30.6016C73.5508 30.3776 73.4727 30.1185 73.4727 29.8242C73.4727 29.4805 73.5508 29.1901 73.707 28.9531C73.8659 28.7161 74.0833 28.5365 74.3594 28.4141C74.6354 28.2917 74.9505 28.2305 75.3047 28.2305C75.6641 28.2305 75.9818 28.2917 76.2578 28.4141C76.5339 28.5365 76.75 28.7161 76.9062 28.9531C77.0625 29.1901 77.1406 29.4805 77.1406 29.8242ZM75.9219 29.8867C75.9219 29.7435 75.8971 29.6198 75.8477 29.5156C75.8008 29.4089 75.7318 29.3268 75.6406 29.2695C75.5495 29.2096 75.4375 29.1797 75.3047 29.1797C75.1771 29.1797 75.0677 29.2083 74.9766 29.2656C74.8854 29.3203 74.8151 29.401 74.7656 29.5078C74.7188 29.612 74.6953 29.7383 74.6953 29.8867C74.6953 30.0326 74.7188 30.1602 74.7656 30.2695C74.8151 30.3763 74.8854 30.4609 74.9766 30.5234C75.0703 30.5833 75.1823 30.6133 75.3125 30.6133C75.4453 30.6133 75.556 30.5833 75.6445 30.5234C75.7357 30.4609 75.8047 30.3763 75.8516 30.2695C75.8984 30.1602 75.9219 30.0326 75.9219 29.8867ZM81.315 30.6484V31.6602C81.315 32.0768 81.2681 32.4375 81.1744 32.7422C81.0832 33.0469 80.9504 33.2982 80.7759 33.4961C80.6041 33.694 80.3983 33.8411 80.1588 33.9375C79.9218 34.0312 79.6588 34.0781 79.3697 34.0781C79.1379 34.0781 78.9218 34.0482 78.7213 33.9883C78.5207 33.9284 78.3397 33.8359 78.1783 33.7109C78.0194 33.5833 77.8827 33.4245 77.7681 33.2344C77.6535 33.0443 77.565 32.8177 77.5025 32.5547C77.4426 32.2917 77.4127 31.9935 77.4127 31.6602V30.6484C77.4127 30.2266 77.4582 29.8646 77.5494 29.5625C77.6431 29.2604 77.7772 29.0104 77.9517 28.8125C78.1262 28.6146 78.3319 28.4688 78.5689 28.375C78.8085 28.2812 79.0728 28.2344 79.3619 28.2344C79.5936 28.2344 79.8085 28.2643 80.0064 28.3242C80.2069 28.3841 80.3879 28.4766 80.5494 28.6016C80.7108 28.7266 80.8476 28.8841 80.9595 29.0742C81.0741 29.2643 81.1614 29.4909 81.2213 29.7539C81.2838 30.0143 81.315 30.3125 81.315 30.6484ZM80.0963 31.8125V30.4883C80.0963 30.293 80.0845 30.1237 80.0611 29.9805C80.0403 29.8346 80.009 29.7109 79.9673 29.6094C79.9283 29.5078 79.8788 29.4258 79.8189 29.3633C79.759 29.3008 79.69 29.2552 79.6119 29.2266C79.5364 29.1953 79.453 29.1797 79.3619 29.1797C79.2473 29.1797 79.1444 29.2031 79.0533 29.25C78.9621 29.2969 78.8853 29.3711 78.8228 29.4727C78.7603 29.5716 78.7121 29.7057 78.6783 29.875C78.647 30.0417 78.6314 30.2461 78.6314 30.4883V31.8125C78.6314 32.0078 78.6418 32.1784 78.6627 32.3242C78.6861 32.4701 78.7173 32.5951 78.7564 32.6992C78.7981 32.8008 78.8489 32.8841 78.9088 32.9492C78.9686 33.0117 79.0377 33.0573 79.1158 33.0859C79.1939 33.1146 79.2785 33.1289 79.3697 33.1289C79.4843 33.1289 79.5858 33.1068 79.6744 33.0625C79.7629 33.0156 79.8384 32.9414 79.9009 32.8398C79.966 32.7357 80.0142 32.599 80.0455 32.4297C80.0793 32.2604 80.0963 32.0547 80.0963 31.8125Z"
				fill="#C4BEB6"
			/>
			<path
				transform={`translate(46,8) rotate(${-145 + speed * 2.5},4,42)`}
				d="M1.09476 41.6734L4 1L6.90524 41.6734C6.96543 42.516 6.65685 43.3431 6.05955 43.9404C4.92209 45.0779 3.07791 45.0779 1.94045 43.9404C1.34315 43.3431 1.03457 42.516 1.09476 41.6734Z"
				fill="#E65300"
				stroke="black"
				strokeOpacity="0.5"
			/>
		</svg>
	)

	const needleSvg = (
		<svg
			width="8"
			height="46"
			viewBox="0 0 8 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.09476 41.6734L4 1L6.90524 41.6734C6.96543 42.516 6.65685 43.3431 6.05955 43.9404C4.92209 45.0779 3.07791 45.0779 1.94045 43.9404C1.34315 43.3431 1.03457 42.516 1.09476 41.6734Z"
				fill="#E65300"
				stroke="black"
				strokeOpacity="0.5"
			/>
		</svg>
	)

	return (
		<div className="speedometer">
			{dialSvg}
			{needleSvg}
		</div>
	)
}

export default Speedometer
