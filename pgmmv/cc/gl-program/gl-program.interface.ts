/**
 * Cocos GL program interface module.
 *
 * @packageDocumentation
 */
import type { CCClass } from '../class';

/**
 * Class that implements a WebGL program.
 */
export interface CCGLProgram extends CCClass {
  /**
   * It will add a new attribute to the shader.
   *
   * @param attributeName
   * @param index
   */
  addAttribute(attributeName: string, index: number): void;

  /**
   * Create a cc.GLProgram object.
   * TODO: What is glContext...
   *
   * @param vShaderFileName
   * @param fShaderFileName
   * @param glContext
   */
  ctor(vShaderFileName: string, fShaderFileName: string, glContext: unknown): CCGLProgram;

  /**
   * Destroy program.
   */
  destroyProgram(): void;

  /**
   * Returns the fragmentShader error log.
   */
  fragmentShaderLog(): string;

  /**
   * Returns the fragmentShader error log.
   */
  getFragmentShaderLog(): string;

  /**
   * Get WebGLProgram object.
   * TODO: What is WebGLProgram type?
   */
  getProgram(): unknown;

  /**
   * Returns the program error log.
   */
  getProgramLog(): string;

  /**
   * Calls retrieves the named uniform location for this shader program.
   *
   * @param name
   */
  getUniformLocationForName(name: string): number;

  /**
   * Get uniform MVP matrix.
   * TODO: What is WebGLUniformLocation type?
   */
  getUniformMVPMatrix(): unknown;

  /**
   * Get uniform sampler.
   * TODO: What is WebGLUniformLocation type?
   */
  getUniformSampler(): unknown;

  /**
   * Returns the vertexShader error log.
   */
  getVertexShaderLog(): string;

  /**
   * Initializes the CCGLProgram with a vertex and fragment with contents of filenames.
   *
   * @param vShaderFilename
   * @param fShaderFileName
   */
  init(vShaderFilename: string, fShaderFileName: string): boolean;

  /**
   * Initializes the cc.GLProgram with a vertex and fragment with string.
   *
   * @param vertShaderStr
   * @param fragShaderStr
   */
  initWithString(vertShaderStr: string, fragShaderStr: string): boolean;

  /**
   * Initializes the cc.GLProgram with a vertex and fragment with string.
   *
   * @param vertShaderStr
   * @param fragShaderStr
   */
  initWithVertexShaderByteArray(vertShaderStr: string, fragShaderStr: string): boolean;

  /**
   * Initializes the CCGLProgram with a vertex and fragment with contents of filenames.
   *
   * @param vShaderFilename
   * @param fShaderFileName
   */
  initWithVertexShaderFilename(vShaderFilename: string, fShaderFileName: string): boolean;

  /**
   * Links the glProgram.
   */
  link(): boolean;

  /**
   * Returns the program error log.
   */
  programLog(): string;

  /**
   * Reload all shaders, this function is designed for android
   * when opengl context lost, so don't call it.
   */
  reset(): void;

  /**
   * Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release.
   * This is a bug in JSB, and the ugly workaround is to use retain/release.
   * So, these 2 methods were added to be compatible with JSB.
   * This is a hack, and should be removed once JSB fixes the retain/release bug.
   */
  retain(): void;

  /**
   * Will update the MVP matrix on the MVP uniform if it is different than the previous call for this same shader program.
   */
  setUniformForModelViewProjectionMatrix(): void;

  /**
   * Calls glUniform1i only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param i1
   */
  setUniformLocationI32(location: unknown | string, i1: number): void;

  /**
   * Calls glUniform1f only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param f1
   */
  setUniformLocationWith1f(location: unknown | string, f1: number): void;

  /**
   * Calls glUniform1i only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param i1
   */
  setUniformLocationWith1i(location: unknown | string, i1: number): void;

  /**
   * Calls glUniform2f only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param f1
   * @param f2
   */
  setUniformLocationWith2f(location: unknown | string, f1: number, f2: number): void;

  /**
   * Calls glUniform2fv.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param floatArray
   */
  setUniformLocationWith2fv(location: unknown | string, floatArray: Float32Array): void;

  /**
   * Calls glUniform2i only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param i1
   * @param i2
   */
  setUniformLocationWith2i(location: unknown | string, i1: number, i2: number): void;

  /**
   * Calls glUniform2iv.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param intArray
   * @param numberOfArrays
   */
  setUniformLocationWith2iv(location: unknown | string, intArray: Int32Array, numberOfArrays: number): void;

  /**
   * Calls glUniform3f only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param f1
   * @param f2
   * @param f3
   */
  setUniformLocationWith3f(location: unknown | string, f1: number, f2: number, f3: number): void;

  /**
   * Calls glUniform3fv.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param floatArray
   */
  setUniformLocationWith3fv(location: unknown | string, floatArray: Float32Array): void;

  /**
   * Calls glUniform3i only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param i1
   * @param i2
   * @param i3
   */
  setUniformLocationWith3i(location: unknown | string, i1: number, i2: number, i3: number): void;

  /**
   * Calls glUniform3iv.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param intArray
   */
  setUniformLocationWith3iv(location: unknown | string, intArray: Int32Array): void;

  /**
   * Calls glUniform4f only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param f1
   * @param f2
   * @param f3
   * @param f4
   */
  setUniformLocationWith4f(location: unknown | string, f1: number, f2: number, f3: number, f4: number): void;

  /**
   * Calls glUniform4fv.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param floatArray
   */
  setUniformLocationWith4fv(location: unknown | string, floatArray: Float32Array): void;

  /**
   * Calls glUniform4i only if the values are different than the previous call for this same shader program.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param i1
   * @param i2
   * @param i3
   * @param i4
   */
  setUniformLocationWith4i(location: unknown | string, i1: number, i2: number, i3: number, i4: number): void;

  /**
   * Calls glUniform4iv.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param intArray
   */
  setUniformLocationWith4iv(location: unknown | string, intArray: Int32Array): void;

  /**
   * Calls glUniformMatrix4fv.
   * TODO: What is WebGLUniformLocation type...?
   *
   * @param location
   * @param matrixArray
   */
  setUniformLocationWithMatrix4fv(location: unknown | string, matrixArray: Float32Array): void;

  /**
   * Will update the builtin uniforms if they are different than the previous call for this same shader program.
   */
  setUniformsForBuiltins(): void;

  /**
   * It will create 4 uniforms: cc.UNIFORM_PMATRIX cc.UNIFORM_MVMATRIX cc.UNIFORM_MVPMATRIX cc.UNIFORM_SAMPLER.
   */
  updateUniforms(): void;

  /**
   * It will call glUseProgram().
   */
  use(): void;

  /**
   * Returns the vertexShader error log.
   */
  vertexShaderLog(): string;
}
