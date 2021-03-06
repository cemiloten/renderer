cmake_minimum_required(VERSION 3.1)
project(openglearn)

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
set(CMAKE_BUILD_TYPE Debug)

set(SRC_DIR ${CMAKE_SOURCE_DIR}/src)
set(LIB_DIR ${CMAKE_SOURCE_DIR}/lib)

file(GLOB SOURCES
    ${SRC_DIR}/*.cpp
    ${LIB_DIR}/imgui/*.cpp
)

add_executable(openglearn ${SOURCES})
target_include_directories(openglearn PRIVATE ${SRC_DIR})
target_include_directories(openglearn PRIVATE ${LIB_DIR})
set_property(TARGET openglearn PROPERTY CXX_STANDARD 11)
set_property(TARGET openglearn PROPERTY CXX_STANDARD_REQUIRED ON)
set_property(TARGET openglearn PROPERTY CMAKE_EXPORT_COMPILE_COMMANDS ON)
set_property(TARGET openglearn PROPERTY CMAKE_BUILD_TYPE Debug)
if (MSVC)
    target_compile_options(openglearn PRIVATE /W4)
else()
    target_compile_options(openglearn PRIVATE -Wall -Wextra -Werror)
endif()


# GLFW
set(GLFW_DIR "${LIB_DIR}/glfw")
set(GLFW_BUILD_EXAMPLES OFF CACHE INTERNAL "Build the GLFW example programs")
set(GLFW_BUILD_TESTS    OFF CACHE INTERNAL "Build the GLFW test programs")
set(GLFW_BUILD_DOCS     OFF CACHE INTERNAL "Build the GLFW documentation")
set(GLFW_INSTALL        OFF CACHE INTERNAL "Generate installation target")
add_subdirectory("${GLFW_DIR}")
target_link_libraries(${PROJECT_NAME} "glfw" "${GLFW_LIBRARIES}")
target_include_directories(${PROJECT_NAME} PRIVATE "${GLFW_DIR}/include")
target_compile_definitions(${PROJECT_NAME} PRIVATE "GLFW_INCLUDE_NONE")

# glad
set(GLAD_DIR "${LIB_DIR}/glad")
add_library("glad" "${GLAD_DIR}/src/glad.c")
target_include_directories("glad" PRIVATE "${GLAD_DIR}/include")
target_include_directories(${PROJECT_NAME} PRIVATE "${GLAD_DIR}/include")
target_link_libraries(${PROJECT_NAME} "glad" "${CMAKE_DL_LIBS}")
