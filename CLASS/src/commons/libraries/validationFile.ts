export const checkValidationFile = (file?: File): boolean => {
  // 이미지 검증
  if (typeof file === "undefined") {
    alert("파일없음");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일용량이 큽니다(제한: 5MB");
    return false;
  }

  if (!file.type.includes("jpeg") && file.type.includes("png")) {
    alert("jpeg 또는 png 파일만 업도르 가능");
    return false;
  }

  return true;
};
