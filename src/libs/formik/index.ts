export function supportErrorFormik(formik: any, name: any): string | undefined {
    const text = formik.errors?.[name] && formik.touched?.[name] ? formik.errors?.[name] : "";
    return text;
}
