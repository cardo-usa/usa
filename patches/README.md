# Patches

A set of patch files to patch dependent packages with pnpm.

## esbuild-register

When using multiple array extends in TypeScript 5.0, the current storybook has an error because the dependent esbuild-register is not up to version of tsconfig-paths.  
Therefore, it is necessary to apply a patch to esbuild-register.

ref: <https://github.com/storybookjs/storybook/issues/21792#issuecomment-1533356647>

## tailwind-variants

In the current tailwind-variants, if you do withTV() in a child package, the process of using fs and path will be done on the client side and needs to be patched.

ref: <https://github.com/nextui-org/tailwind-variants/pull/91>
