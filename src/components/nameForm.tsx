interface NameFormProps {
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>
    name: {
		name0: string
		name1: string
		name2: string
		name3: string
	}
	setName: React.Dispatch<React.SetStateAction<{
		name0: string;
		name1: string;
		name2: string;
		name3: string;
	}>>

}

export function NameForm(props: NameFormProps) {

    const handleName0 = (e: React.ChangeEvent<HTMLInputElement>) =>{
        props.setName((prevState) => ({
			...prevState,
			name0: e.target.value.toUpperCase(),
		}));
    }
    const handleName1 = (e: React.ChangeEvent<HTMLInputElement>) =>{
        props.setName((prevState) => ({
			...prevState,
			name1: e.target.value.toUpperCase(),
		}));
    }
    const handleName2 = (e: React.ChangeEvent<HTMLInputElement>) =>{
        props.setName((prevState) => ({
			...prevState,
			name2: e.target.value.toUpperCase(),
		}));
    }
    const handleName3 = (e: React.ChangeEvent<HTMLInputElement>) =>{
        props.setName((prevState) => ({
			...prevState,
			name3: e.target.value.toUpperCase(),
		}));
    }
    const handleClick = () =>{
        props.setIsSubmitted(true)
    }

	return (
		<div className="flex flex-col items-center">
			<p className="text-4xl font-bold my-8">Grid Racing Game</p>
			<div className="flex flex-col gap-4">
				<label htmlFor="player1">Player 1 Name </label>
				<input
					type="text"
					id="player1"
					className="border-[1px] border-black text-xl uppercase rounded-md p-2"
					maxLength={4}
                    onChange={handleName0}
                    value = {props.name.name0}
				/>
				<label htmlFor="player2">Player 2 Name </label>
				<input
					type="text"
					id="player2"
					className="border-[1px] border-black text-xl uppercase rounded-md p-2"
					maxLength={4}
                    onChange={handleName1}
                    value={props.name.name1}
				/>
				<label htmlFor="player3">Player 3 Name </label>
				<input
					type="text"
					id="player3"
					className="border-[1px] border-black text-xl uppercase rounded-md p-2"
					maxLength={4}
                    onChange={handleName2}
                    value={props.name.name2}
				/>
				<label htmlFor="player4">Player 4 Name </label>
				<input
					type="text"
					id="player4"
					className="border-[1px] border-black text-xl uppercase rounded-md p-2"
					maxLength={4}
                    onChange={handleName3}
                    value={props.name.name3}
				></input>
				<button className="rounded-xl bg-blue-600 text-white py-3 text-xl" disabled={!(props.name.name0&&props.name.name1&&props.name.name2&&props.name.name3)} onClick={handleClick}>
					Start Race
				</button>
			</div>
		</div>
	);
}
