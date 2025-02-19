import type { InputHTMLAttributes } from 'vue'
import { commonClasses } from '@/core/config'
import type { Data, WithVariantPropsAndClassesList } from '@/core/types'

export const richRadioOptionConfig = {
  fixedClasses: {
    disabled: commonClasses.optionOrItemDisabled,

    option: '',

    checked: '',
    unchecked: '',

    highlighted: '',
    nonHighlighted: '',

    separated: '',

    firstItem: 'rounded-tl-lg rounded-tr-lg',
    lastItem: 'rounded-bl-lg rounded-br-lg',

    compact: 'px-4 py-2',
    nonCompact: 'px-5 py-4',

    radio: '',
    radioHighlighted: 'ring-2 ring-offset-2',
    radioChecked: '',
    radioUnchecked: '',
    radioInner: '',

    checkedIconWrapper: '',
    checkedIcon: 'w-6 h-6',
    checkedIconOpacity: '',

    contentWrapper: '',
    contentWrapperIfNotRadio: '',
    contentInner: '',
    content: '',

    label: '',
    labelChecked: '',
    labelUnchecked: '',

    description: '',
    descriptionChecked: '',
    descriptionUnchecked: '',
  },
  classes: {
    disabled: '',

    option: 'relative flex px-5 py-4 cursor-pointer focus:outline-none',

    checked: 'bg-primary-100 dark:bg-primary-500/60 text-white border-primary-200 dark:border-primary-500 z-10',
    unchecked: 'bg-white dark:bg-gray-900',

    highlighted: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 ring-primary-600 border border-primary-200 dark:bg-primary-500 dark:border-primary-500 z-10',
    nonHighlighted: 'border border-gray-200 dark:border-gray-700',

    separated: 'rounded-lg',

    firstItem: '',
    lastItem: '',

    compact: '',
    nonCompact: '',

    radio: 'h-4 w-4 mt-1 cursor-pointer rounded-full border flex items-center justify-center flex-shrink-0',
    radioHighlighted: 'ring-primary-500',
    radioChecked: 'bg-primary-600 border-transparent dark:bg-gray-900 ring-offset-white dark:ring-offset-gray-900',
    radioUnchecked: 'bg-white dark:bg-gray-700 border-gray-300',
    radioInner: 'rounded-full bg-white w-1.5 h-1.5',

    checkedIconWrapper: 'flex-shrink-0',
    checkedIcon: 'w-6 h-6',
    checkedIconOpacity: 'fill-opacity-90 dark:fill-opacity-30 fill-[#4f46e5] dark:fill-[#fff]',

    contentWrapper: 'ml-3 flex items-center justify-between text-sm',
    contentWrapperIfNotRadio: 'w-full',
    contentInner: '',
    content: 'flex items-center',

    label: 'font-medium',
    labelChecked: 'font-bold text-primary-900 dark:text-white',
    labelUnchecked: 'font-normal text-gray-900 dark:text-white',

    description: 'inline',
    descriptionChecked: 'text-primary-700 dark:text-gray-200',
    descriptionUnchecked: 'text-gray-500 dark:text-gray-400',
  },

  // Variants
  variants: {
    // Used for Errors
    error: {
      classes: {
        disabled: '',

        option: 'relative flex px-5 py-4 cursor-pointer focus:outline-none',

        checked: 'bg-red-100 dark:bg-red-500/30 text-white border-red-200 dark:border-red-500 z-10',
        unchecked: 'bg-white dark:bg-gray-900',

        highlighted: 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 ring-red-600 border border-red-200 dark:bg-red-500 dark:border-red-500 z-10',
        nonHighlighted: 'border border-gray-200 dark:border-gray-700',

        separated: 'rounded-lg',

        firstItem: '',
        lastItem: '',

        compact: '',
        nonCompact: '',

        radio: 'h-4 w-4 mt-1 cursor-pointer rounded-full border flex items-center justify-center',
        radioHighlighted: 'ring-red-500',
        radioChecked: 'bg-red-600 border-transparent dark:bg-red-700 ring-offset-white dark:ring-offset-gray-90',
        radioUnchecked: 'bg-white dark:bg-gray-700 border-gray-300',
        radioInner: 'rounded-full bg-white w-1.5 h-1.5',

        checkedIconWrapper: 'flex-shrink-0',
        checkedIcon: 'w-6 h-6',
        checkedIconOpacity: 'fill-opacity-90 dark:fill-opacity-30 fill-red-300 dark:fill-[#fff]',

        contentWrapper: 'ml-3 flex items-center justify-between text-sm',
        contentWrapperIfNotRadio: 'w-full',
        contentInner: '',
        content: 'flex items-center',

        label: 'font-medium',
        labelChecked: 'font-bold text-red-900 dark:text-white',
        labelUnchecked: 'font-normal text-gray-900 dark:text-white',

        description: 'inline',
        descriptionChecked: 'text-red-700 dark:text-gray-200',
        descriptionUnchecked: 'text-gray-500 dark:text-gray-400',
      },
    },
  },
}

export const richRadioOptionClassesKeys = Object.keys(richRadioOptionConfig.classes)

export declare type RichRadioOptionClassesValidKeys = keyof typeof richRadioOptionConfig.classes

export declare type RichRadioOptionProps = WithVariantPropsAndClassesList<{
  name?: string | undefined
  image?: string | undefined
  selected?: boolean
  description?: string | undefined
  hasErrors?: boolean
  parentClasses?: string[] | string
} & InputHTMLAttributes & Data, RichRadioOptionClassesValidKeys>
