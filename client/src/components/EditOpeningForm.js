import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditOpeningForm = ({}) => {
  const location = useLocation()
  const { opening } = location.state

  return <div>Worky</div>
}

export default EditOpeningForm
