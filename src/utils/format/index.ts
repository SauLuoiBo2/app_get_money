import _ from "lodash";

export const differenceBetweenTwoObj = (newObj: any, oldObj: any) => {
    function changes(newObj: any, oldObj: any) {
        return _.transform(newObj, (result: any, value, key) => {
            if (!_.isEqual(value, oldObj[key])) {
                // eslint-disable-next-line no-param-reassign
                result[key] = _.isObject(value) && _.isObject(oldObj[key]) ? changes(value, oldObj[key]) : value;
            }
        });
    }
    return changes(newObj, oldObj);
};

export function formatNumberWithDot(n?: number) {
    return n ? n.toString().replace(/\B(?!\.\d*)(?=(\d{3})+(?!\d))/g, ".") : "N/A";
}

export function formatLinkNavigate(navigate: string) {
    return `/${navigate}`;
}

export function formatDetailLink(navigate: any, id: any, url: string) {
    if (id) {
        navigate(`/${url}/${id}`);
    }
}
