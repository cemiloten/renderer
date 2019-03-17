#version 330 core

out vec4 frag_color;

in vec3 v_color;
in vec2 uv_coords;

uniform sampler2D myTexture;

void main()
{
    // frag_color = vec4(v_color, 1.0);
    frag_color = texture(myTexture, uv_coords);
}
