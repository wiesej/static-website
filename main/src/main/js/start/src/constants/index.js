export const API_URL = "http://localhost:3100";
export const JAVA_VERSIONS = [8, 9, 10, 11, 12, 13, 14];
export const LANG_OPTS = [
    { label: "Java", value: "java" },
    { label: "Kotlin", value: "kotlin" },
    { label: "Groovy", value: "groovy" },
];

export const BUILD_OPTS = [
    { label: "Gradle", value: "gradle" },
    { label: "Maven", value: "maven" },
];

export const TEST_OPTS = [
    { value: "junit", label: "JUnit" },
    { value: "spock", label: "Spock" },
    { value: "kotlintest", label: "Kotlintest" },
];

export const DEFAULT_JAVA_VERSION = 11;
export const DEFAULT_LANG = "java";
export const DEFAULT_BUILD = "gradle";
export const DEFAULT_TEST_FW = "junit";
