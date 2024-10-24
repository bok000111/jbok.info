import { Button } from "@/components/ui/button"
import React from "react"

const Root: React.FC = () => {
	return (
		<div className="flex flex-col items-center h-screen w-full gap-4">
			<p className="text-lg text-center">jbok.info는 아직 구현중입니다 NASA에서 제공하는 오늘의 천체사진이라도 보고가세요</p>
			<a href="https://apod.nasa.gov/apod/">
				<Button>
					클릭하면 APOD로 이동합니다
				</Button>
			</a>
		</div>
	)
}

export default Root;