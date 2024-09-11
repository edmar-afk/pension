/* eslint-disable react/no-unescaped-entities */
import chatbot from '../../assets/svg/chatbot.svg'
function Details() {
  return (
		<>
			<div className="flex flex-col mt-32 items-center justify-center">
				<img
					src={chatbot}
          alt=""
          className='w-56'
        />
        <p>Need Clarifications? I'll answer anything just pick question below.</p>
			</div>
		</>
	);
}

export default Details
