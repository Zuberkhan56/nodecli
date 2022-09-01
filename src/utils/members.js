const LINUX_FOLDER_PATH_REGEX = /^(\w|\/(?!\/)|(\.(?!\.\.)))+$/;
const WINDOWS_FOLDER_PATH_REGEX = /^[.a-zA-Z]:\\(?:\w+\\?)+$/;
const INIT_CREATE_PROJECT_NAME = /^([A-Za-z])\w+$/;

export default {
    LINUX_FOLDER_PATH_REGEX,
    WINDOWS_FOLDER_PATH_REGEX,
    INIT_CREATE_PROJECT_NAME
};
