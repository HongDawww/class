import { DogImg, Wrapper } from "./OpenapiList.styles";
import type { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps): JSX.Element {
  console.log(props.imgUrls);
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el) => (
          <>
            <DogImg key={el} src={el} />
          </>
        ))}
      </div>
    </Wrapper>
  );
}

//   {(index + 1) % 3 === 0 && <br />} -- css로 처리
