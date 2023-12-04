import { useMutation, gql } from "@apollo/client"
// import { useState } from "react"

const CREATE_PRODUCT = gql`
	mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
		createProduct(seller: $seller, createProductInput: $createProductInput){
			_id
			number
			message
		}
	}
`

export default function GraphqlMutationPage() {

	// const [writer, setWriter] = useState()
	// const [title, setTitle] = useState()
	// const [contents, setContents] = useState()

	const [createProduct] = useMutation(CREATE_PRODUCT)

	const onClickSubmit = async () => {
		const result = await createProduct({
			variables: { 				// variables = $역할
				seller: "훈이",
				createProductInput: {
					name: "마우스",
					detail: "개조은마우스",
					price: 3000
				}

			}
		});
		console.log(result);
	  };

	// const onChangeWriter = (event) => {
	// 	setWriter(event.target.value)
		
	// }

	// const onChangeTitle = (event) => {
	// 	setTitle(event.target.value)
	// }

	// const onChangecContents = (event) => {
	// 	setContents(event.target.value)
	// }


	return (
		<div>

			<button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
		</div>
	)
}